interface ActionSpacerProps {}

const ActionSpacer: React.FC<ActionSpacerProps> = (props) => {
  const {} = props;
  return <div className="v2-action-spacer" />;
};

ActionSpacer.displayName = '@v2/Action.Spacer';
export { ActionSpacer, type ActionSpacerProps };
