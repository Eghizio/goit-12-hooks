interface Props {
  children: string;
  color: string;
}

export const Text = ({ children, color }: Props) => (
  <span style={{ color }}>{children}</span>
);
