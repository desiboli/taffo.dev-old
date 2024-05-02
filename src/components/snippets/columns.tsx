import { type ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

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
    accessorKey: 'data.tags',
    header: 'Tags',
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
