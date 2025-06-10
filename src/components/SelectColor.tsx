import { Button, Dropdown, type MenuProps } from "antd";
import { use, useContext } from "react";
import { AppContext } from "../AppContext";

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


export function SelectColor() {
    const { setColor } = use(AppContext)
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
