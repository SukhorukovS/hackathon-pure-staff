import { FC, useState, InputHTMLAttributes } from 'react'
import { Listbox } from '@headlessui/react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  itemList: string[]
}

export const Select: FC<Props> = ({itemList, ...rest}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([itemList[0]])

  return (
    <Listbox as='div' {...rest}  value={selectedItems} onChange={setSelectedItems} multiple>
      <Listbox.Button>
        {selectedItems?.map((item) => item).join(', ')}
      </Listbox.Button>
      <Listbox.Options>
        {itemList.map(item => (
          <Listbox.Option key={item} value={item}>
            {item}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
