import React from 'react';

type Props = {
  name: string,
};

export default function ExampleComponent({ name }: Props) {
  return <div>Hi {name}.</div>;
}
