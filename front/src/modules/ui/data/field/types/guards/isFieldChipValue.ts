import { isString } from '@sniptt/guards';

import { FieldChipValue } from '../FieldMetadata';

// TODO: add yup
export const isFieldChipValue = (
  fieldValue: unknown,
): fieldValue is FieldChipValue => isString(fieldValue);
