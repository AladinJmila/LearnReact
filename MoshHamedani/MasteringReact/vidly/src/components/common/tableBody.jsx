import React, { Component } from 'react'

class TableBody extends Component {
  render() {
    const { data, columns }

    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td></td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}

export default TableBody
