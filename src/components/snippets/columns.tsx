import { type ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { categories } from './data-table-toolbar'

export const columns: ColumnDef<any, any>[] = [
  {
    id: 'title',
    accessorKey: 'data.title',
    header: 'Title',
  },
  {
    accessorKey: 'data.description',
    header: 'Description',
  },
  {
    id: 'category',
    accessorKey: 'data.category',
    header: 'Category',
    cell: ({ row }) => {
      const category = categories.find(
        (category) => category.value === row.getValue('category')
      )

      if (!category) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {/* {tag.icon && (
            <tag.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span>{category.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'data.pubDate',
    header: 'Published',
    cell: (props) => {
      const date = props.getValue()
      return format(date, 'dd.MM.yyyy')
    },
  },
  {
    accessorKey: 'data.updatedDate',
    header: 'Updated',
    cell: (props) => {
      const date = props.getValue()
      return format(date, 'dd.MM.yyyy')
    },
  },
]
