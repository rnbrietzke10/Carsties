'use client';
import { Button, Dropdown, DropdownDivider } from 'flowbite-react';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai';
import { HiCog, HiUser } from 'react-icons/hi';
type Props = {
  user: Partial<User>;
};

const UserActions = ({ user }: Props) => {
  return (
    <Dropdown label={`Welcome ${user.name}`} inline>
      <Dropdown.Item icon={HiUser}>
        <Link href="/">My Auctions</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillTrophy}>
        <Link href="/">Aucitons Won</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillCar}>
        <Link href="/">Sell My Car</Link>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        <Link href="/session">Session (dev only)</Link>
      </Dropdown.Item>
      <DropdownDivider />
      <Dropdown.Item
        icon={AiOutlineLogout}
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Sign Out
      </Dropdown.Item>
    </Dropdown>
  );
};

export default UserActions;
