import AvatarInitials from '../AvatarInitials';

const users = [
  {
    name: 'John Smith',
    expectedInitials: 'JS'
  },
  {
    name: 'John William Smith',
    expectedInitials: 'JS'
  },
  {
    name: 'John',
    expectedInitials: 'J'
  },
];


describe('Showing user\'s initials', () => {
  it('shows the correct initials', () => {
    users.map((user) => {
      expect(AvatarInitials(user.name)).toEqual(user.expectedInitials);
    })
  })
})