// @flow

export function blacklistProps(props: {}, blacklist: Array<string> = []): {} {
  const newProps = { ...props };

  blacklist.forEach(blacklistedProp => delete newProps[blacklistedProp]);

  return newProps;
}
