import $ from 'jquery'
import DataTable from 'datatables.net-dt'
import moment from 'moment'
import './styles/main.scss'

// Fetch the data from the API
const response = await fetch('https://json.extendsclass.com/bin/046f024ee1d1')
  .then((reply) => reply.json())
  .then((data) => data)
  .catch((error) => console.log(error))

// Get the `table` element
const table = document.querySelector('table')

// Initialize DataTable on `table` element
const dataTable = new DataTable(table, {
  // Define the columns to display
  columns: [
    { data: 'sellerName' },
    {
      data: 'ratingPercentage',
      render(data) {
        // Add a percentage symbol using a template literal
        return `${data}%`
      },
    },
    { data: 'ratingCount' },
    {
      data: 'lastWonUTC',
      render(data) {
        // Format the date using moment.js
        return moment.utc(data).format('M/D/YY HH:mm')
      },
    },
    {
      data: 'winDurationSeconds',
      render(data) {
        // Format the duration using moment.js
        return moment.duration(data, 'seconds').humanize()
      },
    },
  ],
  data: response.data, // Use the data from the API response
  pageLength: 5, // Show 5 rows per page

  // Add a title attribute to the 5th column, which will be used as a tooltip
  createdRow(row, data) {
    $(row)
      .find('td:last-child')
      .attr('title', moment.utc(data.lastWonUTC).format('DD MMM YYYY HH:mm'))
  },

  // Disabled some features that are not needed
  info: false,
  lengthChange: false,
  searching: false,
})

// If the `table` exists, initialize DataTable
if (table) {
  dataTable.init()
}
