// @flow

import { VerticalSeparator } from './styles';

type Props = {
  render: any,
};

export default function VerticalSeparatorComponent({ render }: Props) {
  return render(VerticalSeparator);
}
