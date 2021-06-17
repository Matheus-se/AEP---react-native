export function getUserInitials(name) {
  let initials: string = '';
  for (let i = 0; i < name.split(' ').length; i++) {
    if (initials.length < 2) {
      initials += name.split(' ')[i][0];
    }
  }
  return initials;
}
