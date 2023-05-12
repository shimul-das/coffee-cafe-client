import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setcoffees }) => {
  const {_id, name, supplier, chef, category, taste, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
            Swal.fire(
                'Deleted',
                'Your Coffee has been deleted',
                'success'
            )
            const remaining=coffees.filter(cof=>cof._id!==_id);
            setcoffees(remaining);
            }
        
        })
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl p-10">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between  w-full border p-4 ">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-2 ">
          <button className="btn">View</button>
          <Link to={`/updatecoffee/${_id}`}>
          <button className="btn">Edit</button>
          </Link>
          <button
            className="btn bg-orange-500"
            onClick={() => handleDelete(_id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
