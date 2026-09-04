import { render, screen } from '@testing-library/react';
import StatsCard from '@/components/user/StatsCard';

describe('Stats Card testing', () => {
  test('test for basic rendering', () => {
    render(<StatsCard title="Total Users" count={42} />);
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
  });
  test('test for zero values', () => {
    render(<StatsCard title="Active Sessions" count={0} />);
    expect(screen.getByText('Active Sessions')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  test('test for large numbers', () => {
    render(<StatsCard title="Total Views" count={1000000} />);
    expect(screen.getByText('Total Views')).toBeInTheDocument();
    expect(screen.getByText(1000000)).toBeInTheDocument();
  });
});
