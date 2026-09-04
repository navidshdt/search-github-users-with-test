import { render, screen } from '@testing-library/react';
import UserCard from '@/components/user/UserCard';

describe('UserCard testing', () => {
  const mockProps = {
    avatarUrl: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    bio: 'Frontend Developer',
    url: 'https://github.com/johndoe',
  };

  test('renders user information correctly', () => {
    render(<UserCard {...mockProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();

    const avatarImage = screen.getByAltText('John Doe');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute(
      'src',
      'https://example.com/avatar.jpg',
    );

    const followLink = screen.getByRole('link', { name: /follow/i });
    expect(followLink).toHaveAttribute('href', 'https://github.com/johndoe');
    expect(followLink).toHaveAttribute('target', '_blank');
    expect(followLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('renders default values when name and bio are not provided', () => {
    const propsWithoutNameAndBio = {
      ...mockProps,
      name: '',
      bio: '',
    };
    render(<UserCard {...propsWithoutNameAndBio} />);
    expect(screen.getByText('Coding Addict')).toBeInTheDocument();
    expect(
      screen.getByText('Passionate about coding and technology.'),
    ).toBeInTheDocument();
  });
});
