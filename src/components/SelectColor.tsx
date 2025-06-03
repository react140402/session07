import { Button, Dropdown, Space, type MenuProps } from "antd";
import { useState } from "react";

const items: MenuProps['items'] = [
    {
        key: 'red',
        label: '🟥'
    },
    {
        key: 'yellow',
        label: '🟨'
    },
    {
        key: 'green',
        label: '🟩'
    },

];

interface Props {
    setColor: (val: string) => void;
}
export function SelectColor({ setColor }: Props) {
    const onClick: MenuProps['onClick'] = ({ key }) => {
        setColor(key)
    };

    return (
        <Dropdown menu={{ items, onClick }} >
            <Button>
                SelectColor
            </Button>
        </Dropdown>
    )
}
