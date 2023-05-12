import React from 'react'
import './addcard.css'
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleaddcoffee =(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const supplier=form.supplier.value;
        const chef=form.chef.value;
        const category=form.category.value;
        const taste=form.taste.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const newcoffee={name,supplier,chef,category,taste,details,photo}
        console.log(newcoffee)
        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newcoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
    }
return (
<div>
    <form onSubmit={handleaddcoffee} className='bg-[#f4f3f0] p-24'>
    <h1 className='text-3xl font-extrabold text-center pb-5'>Add a Coffee</h1>
        <div className='md:flex'>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                    <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 pl-3">
                <label className="label">
                    <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                    <input type="text" name='supplier' placeholder="Enter Coffee Supplier"
                        className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div  className='md:flex'>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <label className="input-group">
                    <input type="text" name='chef' placeholder="Enter Coffee Quantity" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 pl-3">
                <label className="label">
                    <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                    <input type="text" name='taste' placeholder="Enter Coffee Taste"
                        className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className='md:flex'>
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                    <input type="text" name='category' placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control md:w-1/2 pl-3">
                <label className="label">
                    <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                    <input type="text" name='details' placeholder="Enter Coffee Details"
                        className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <div className='md:flex'>
            <div className="form-control md:w-full">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                    <input type="text" name='photo' placeholder="Enter Photo Url"
                        className="input input-bordered w-full" />
                </label>
            </div>
        </div>
        <input className='btn mt-3 md:w-full' type="submit" value="Add a Coffee" />
    </form>
</div>
)
}

export default AddCoffee