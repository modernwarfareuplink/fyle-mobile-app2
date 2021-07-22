import { Injectable } from '@angular/core';
import { reject } from 'lodash';
import { ExtendedOrgUser } from '../models/extended-org-user.model';
import { AuthService } from './auth.service';
import { CurrencyService } from './currency.service';
import { OrgUserService } from './org-user.service';

@Injectable({
  providedIn: 'root'
})
export class NPSService {

  constructor(
    private orgUserService: OrgUserService,
    private currencyService: CurrencyService,
    private authService: AuthService
  ) { }

  isNonDemoOrg(orgName: string) {
    return orgName.toLowerCase().indexOf('fyle for') === -1;
  };

  canStartSurvey(homeCurrency: string, eou: ExtendedOrgUser) {
    var usdOrg = homeCurrency && homeCurrency === 'USD' && eou && eou.ou && eou.ou.org_name && this.isNonDemoOrg(eou.ou.org_name);
    var isSwitchedToDelegator = false; 
    return this.orgUserService.isSwitchedToDelegator()
    .then((isSwitchedToDelegator) => {
      isSwitchedToDelegator = isSwitchedToDelegator;
    })
    .catch(err => {
      reject (err)
    })
    .finally(() => {
      return !isSwitchedToDelegator;
    })
  };

  getDefaultProperties(eou: ExtendedOrgUser) {
    var properties = {};

    properties['India / International'] = 'International Americas';
    properties['Delighted Email Subject'] = '';
    properties['Company ID'] = eou.ou.org_id;
    properties['Company Name'] = eou.ou.org_name;
    properties['Admin'] = eou && eou.ou && eou.ou.roles && eou.ou.roles.indexOf('ADMIN') > -1 ? 'T' : 'F';
    properties['Lite'] = 'F';

    return properties;
  };

  async startSurvey(properties: any, options: any) {
    var eou = await this.authService.getEou();
    if ((window as any).delighted !== 'undefined' && (window as any).delighted !== null) {
      if (eou) {
        this.currencyService.getHomeCurrency().toPromise()
        .then((homeCurrency) => {
          if (this.canStartSurvey(homeCurrency, eou)) {
            const delightedProperties = this.getDefaultProperties(eou);
            if (properties) {
              Object.assign({}, delightedProperties, properties);
            }
            const delightedOptions = {
              email: eou.us.email,
              name: eou.us.full_name,
              createdAt: eou.us.created_at,
              properties: delightedProperties
            };
            if (options) {
              Object.assign({}, delightedOptions, options);
            }
            return (window as any).delighted.survey(delightedOptions);
          }
          return;
        })
        .catch(err => {
          reject(err);
        });
      }
    }
  };
}

