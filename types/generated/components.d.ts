import type { Struct, Schema } from '@strapi/strapi';

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'check';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LanguagesLanguages extends Struct.ComponentSchema {
  collectionName: 'components_languages_languages';
  info: {
    displayName: 'Languages';
    icon: 'discuss';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experience_s';
  info: {
    displayName: 'Experience ';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
    workSummery: Schema.Attribute.Text;
  };
}

export interface EducationsEducations extends Struct.ComponentSchema {
  collectionName: 'components_educations_educations';
  info: {
    displayName: 'Educations';
    icon: 'clock';
    description: '';
  };
  attributes: {
    institute: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
    summery: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'skills.skills': SkillsSkills;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'languages.languages': LanguagesLanguages;
      'experience.experience': ExperienceExperience;
      'educations.educations': EducationsEducations;
    }
  }
}
