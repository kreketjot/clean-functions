export default (player) => {
  const health = player?.health;
  if (!Number.isFinite(health)) {
    return null;
  }
  if (health > 50) {
    return 'healthy';
  }
  if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
};
