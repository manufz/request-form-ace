import {
  BaseBasicCardView,
  IBasicCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'RequestFormAdaptiveCardExtensionStrings';
import { IRequestFormAdaptiveCardExtensionProps, IRequestFormAdaptiveCardExtensionState, QUICK_VIEW_REGISTRY_ID } from '../RequestFormAdaptiveCardExtension';

export class CardView extends BaseBasicCardView<IRequestFormAdaptiveCardExtensionProps, IRequestFormAdaptiveCardExtensionState> {
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IBasicCardParameters {
    return {
      primaryText: strings.PrimaryText
    };
  }
}
