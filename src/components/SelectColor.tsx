import { Button, Dropdown, type MenuProps } from "antd";
import { useContext } from "react";
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
    const { setColor } = useContext(AppContext)
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
