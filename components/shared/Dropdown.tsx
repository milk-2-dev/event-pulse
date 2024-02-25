import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { ICategory } from '@/lib/database/models/category.model';


type DropdownProps = {
  value: string
  onChangeHandler: () => void
}

const Dropdown = ({value, onChangeHandler}: DropdownProps) => {
  const [ categories, setCategories ] = useState<ICategory>([
    {_id: '1', name: 'category 1'},
  ]);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field w-[180px]">
        <SelectValue placeholder="Category"/>
      </SelectTrigger>
      <SelectContent>
        {categories.length > 0 && categories.map((category) => {
          return <SelectItem key={category._id}
                             value={category._id}
                             className="select-item p-regular-14"
          >
            {category.name}
          </SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
