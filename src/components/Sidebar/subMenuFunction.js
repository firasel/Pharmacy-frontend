export default function subMenuFunction(state, currentKey) {
  const [expandKey, setExpandKey] = state;
  if (expandKey !== currentKey) {
    setExpandKey(currentKey);
  }
}
