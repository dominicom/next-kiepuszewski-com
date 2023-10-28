import React from "react";

import Icon from "../Icon";

export default function Button(props) {
  const {
    children,
    className,
    label,
    onClick,
    renderIcon,
    kind,
    hasOnlyIcon,
    anchor,
    disabled,
    ...other
  } = props;

  const buttonKind =
    (kind === "primary" && "dtm--button--primary") ||
    (kind === "secondary" && "dtm--button--secondary") ||
    (kind === "tertiary" && "dtm--button--tertiary") ||
    (kind === "danger" && "dtm--button--danger") ||
    (kind === "warning" && "dtm--button--warning") ||
    (kind === "green" && "dtm--button--green") ||
    (kind === "orange" && "dtm--button--orange") ||
    // To-Do
    (kind && `dtm--button--custom ${kind}`);

  const classes = [
    className ? className : null,
    "dtm--button",
    hasOnlyIcon && "dtm--button--icon-only",
    kind ? buttonKind : "dtm--button--default",
    disabled && "dtm--button--disabled"
  ]
    .join(" ")
    .trim();

  const Component = anchor ? "a" : "button";

  return (
    <Component
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {!children && label}
      {!hasOnlyIcon && children}
      {!children && !label && <span>Button</span>}
      {renderIcon && RenderIconComponent(renderIcon)}
    </Component>
  );
};


const RenderIconComponent = (icon) => {
  if (typeof icon === "string") {
    return <Icon className="dtm--button__icon" size={16} name={icon} stroke={1.75} />;
  }
  if (typeof icon === "function") {
    return icon
  } else {
    return <Icon className="dtm--button__icon" size={16} name="Circle" stroke={1.75} />;
  }
  return null
}
