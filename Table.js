import React from 'react'

function Table() {
  return (
    <div className='container'>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">Association office name</th>
      <th scope="col">Year</th>
      <th scope="col">Approve or decline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Sohaib</td>
      <td>shobiikhanzada@gamil.com</td>
      <td>03400324041</td>
      <td>ETC</td>
      <td>2023</td>
      <td> 
         <button type="submit" class="btn btn-primary">Approve</button>
         <button type="submit" class="btn btn-primary">Decline</button>
        </td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Sohaib</td>
      <td>shobiikhanzada@gamil.com</td>
      <td>03400324041</td>
      <td>ETC</td>
      <td>2023</td>
      <td> 
         <button type="submit" class="btn btn-primary">Approve</button>
         <button type="submit" class="btn btn-primary">Decline</button>
        </td>
    </tr>
    <tr>
    <th scope="row">3 </th>
      <td>Sohaib</td>
      <td>shobiikhanzada@gamil.com</td>
      <td>03400324041</td>
      <td>ETC</td>
      <td>2023</td>
      <td> 
         <button type="submit" class="btn btn-primary">Approve</button>
         <button type="submit" class="btn btn-primary">Decline</button>
        </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table
