import DataTable from 'datatables.net-dt'
import moment from 'moment'
import './styles/main.scss'

const response = await fetch('https://json.extendsclass.com/bin/046f024ee1d1')
  .then((reply) => reply.json())
  .then((data) => data)
  .catch((error) => console.log(error))

const table = document.querySelector('table')

const dataTable = new DataTable(table, {
  columns: [
    { data: 'sellerName' },
    {
      data: 'ratingPercentage',
      render(data) {
        return `${data}%`
      },
    },
    { data: 'ratingCount' },
    {
      data: 'lastWonUTC',
      render(data) {
        return moment.utc(data).format('M/D/YY HH:mm')
      },
    },
    {
      data: 'winDurationSeconds',
      render(data) {
        return moment.duration(data, 'seconds').humanize()
      },
    },
  ],
  data: response.data,
  info: false,
  lengthChange: false,
  pageLength: 5,
  searching: false,
})

if (table) {
  dataTable.init()
}
