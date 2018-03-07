// @flow

import faker from 'faker';

export function getLoremIpsumParagraph() {
  // make sure that we generate always the smae data for the storybook
  faker.seed(123);
  return faker.lorem.paragraphs(3);
}
