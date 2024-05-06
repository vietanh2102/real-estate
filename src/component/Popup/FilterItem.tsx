import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import classNames from "classnames/bind";
import styles from "./FilterItem.module.scss"
import { Filter } from '../../constant/array';
interface Props {
    item: Filter[]
    typeFIlter: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const cx = classNames.bind(styles)
function FilterItem({ item, typeFIlter, value, setValue }: Props) {
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };
    return (
        <div className={cx("conatiner")}>
            <FormControl sx={{
                width: 1 / 1,
                background: 'white',
            }}>
                <InputLabel id="title">{typeFIlter}</InputLabel>
                <Select
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                    labelId="filter-lable"
                    id="filter"
                    value={value}
                    onChange={handleChange}
                    label={typeFIlter}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {item.map((item, index) => (

                        <MenuItem key={index} value={item.value}>{item.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default FilterItem;