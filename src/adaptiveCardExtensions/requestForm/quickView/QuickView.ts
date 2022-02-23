import { ISPFxAdaptiveCard, BaseAdaptiveCardView, IActionArguments } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'RequestFormAdaptiveCardExtensionStrings';
import { IRequestFormAdaptiveCardExtensionProps, IRequestFormAdaptiveCardExtensionState } from '../RequestFormAdaptiveCardExtension';

export interface IQuickViewData {
  categoryLabel: string;
  feedbackRadio: string;
  problemRadio: string;
  titleLabel: string;
  descriptionLabel: string;
  missingTitle: string;
  selectFileButton: string;
  submitButton: string;
}

export class QuickView extends BaseAdaptiveCardView<
  IRequestFormAdaptiveCardExtensionProps,
  IRequestFormAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      categoryLabel: strings.CategoryLabel,
      feedbackRadio: strings.FeedbackRadio,
      problemRadio: strings.ProblemRadio,
      titleLabel: strings.TitleLabel,
      descriptionLabel: strings.DescriptionLabel,
      missingTitle: strings.MissingTitle,
      selectFileButton: strings.SelectFileButton,
      submitButton: strings.SubmitButton
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }

  public onAction(action: IActionArguments): void {
    if (action.type === 'Submit') {
      console.log(action.data);
    }
  }
}