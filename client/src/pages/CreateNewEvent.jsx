import { useState } from "react";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import {app} from '../firebase'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
export default function CreateNewEvent() {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    address:"",
    registerUrl:"",
    organiser:"",
    date:"",
    time:"",
    meridian:"AM",
    category:"Sports",
    imageUrl:""
  })

  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileError, setFileError] = useState(false);
  const navigate = useNavigate()

  const handleImageSubmit = () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileError(true);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({
            ...formData,
            imageUrl: downloadURL,
          });
        });
      }
    );
  };

  const handleChange = (e) => {
    
      setFormData({
        ...formData,
        [e.target.id] : e.target.value
      })
    
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try {
      const res = await fetch('api/v1/event/create',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          ...formData,
          userRef: currentUser._id
        })
      })
      const data = await res.json();
  
      if(data.success === false){
        console.log(data.message);
        return;
      }
  
      navigate('/')
      
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <form onSubmit={handleSubmit} className="lg:max-w-5xl max-w-md mt-24 mx-auto shadow-md rounded-md bg-white p-5">
      <div className="w-full text-center">
        <span className="text-4xl font-bold text-slate-600">
          Create an event
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg gap-8 mt-9">
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-slate-700 text-sm">Title</span>
          <input
            type="text"
            id="title"
            required
            onChange={handleChange}
            value={formData.title}
            className=" p-2 border border-gray-500 bg-black/[0.1] outline-none rounded-md"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-slate-700 text-sm">Address</span>
          <input
            type="text"
            id="address"
            required
            onChange={handleChange}
            value={formData.address}
            className=" p-2 border border-gray-500 bg-black/[0.1] outline-none rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-5">
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-slate-700 text-sm">Description</span>
          <textarea
            type="text"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
            className="h-36 p-2 border border-gray-500 bg-black/[0.1] outline-none rounded-md"
          />
        </div>
        <div className="flex-1 flex gap-3 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="text-slate-700 text-sm">
              Date of event(dd/mm/yyyy)
            </span>
            <input
              type="text"
              id="date"
              required
              onChange={handleChange}
              value={formData.date}
              className="max-w-44 p-2 border border-gray-500 bg-black/[0.1] outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <span className="text-slate-700 text-sm">Time(hr:min)</span>
            <input
              type="text"
              id="time"
              required
              onChange={handleChange}
              value={formData.time}
              className="w-28 p-2 border border-gray-500 bg-black/[0.1] outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-700 text-sm">AM/PM</span>
            <select
              className="rounded-md p-3 w-24 text-lg font-semibold"
              id="meridian"
              onChange={handleChange}
              value={formData.meridian}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-700 text-sm">Category</span>
            <select
              className="p-3 rounded-md text-lg font-semibold"
              id="category"
              onChange={handleChange}
              required
              value={formData.category}
            >
              <option value="Sports">Sports</option>
              <option value="Educational">Educational</option>
              <option value="Seminar">Seminar</option>
              <option value="Webinar">Webinar</option>
              <option value="Recreational">Recreational</option>
              <option value="Festive Eve">Festive Eve</option>
              <option value="College Fests">College Fests</option>
            </select>
          </div>
          <div className="flex-auto pr-2">
            <div className="flex  flex-col gap-1">
              <span className="text-slate-700 text-sm">Organiser Name</span>
              <input
                type="text"
                id="organiser"
                required
                onChange={handleChange}
                value={formData.organiser}
                className=" p-2 border border-gray-500 bg-black/[0.1] outline-none rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-slate-700 text-sm">Registration Url</span>
          <input
            type="text"
            id="registerUrl"
            required
            onChange={handleChange}
            value={formData.registerUrl}
            className=" p-2 border border-gray-500 bg-black/[0.1] outline-none rounded-md"
          />
        </div>
        <div className="flex flex-col lg:flex-row flex-1 mt-5  text-xl gap-6">
            <input className="p-3 border rounded-md" type="file" id="image" accept="image/*" onChange={(e)=>setFile(e.target.files[0])}/>
            <button onClick={handleImageSubmit} type="button" className="p-3 border rounded-lg bg-black/[0.1] hover:bg-black/[.2]">Upload</button>
        </div>
        <p className="text-sm text-center mt-4">
          {fileError ? (
            <span className="text-red-700">Error Image Upload</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image Successfully Uploaded</span>
          ) : (
            ""
          )}
        </p>
        {
          formData.imageUrl!=="" && <img className="w-20 h-10 mt-5" src={formData.imageUrl} alt="" />
        }
      </div>

      <div className="flex justify-center mt-9 ">
        <button className=" w-48 p-3 bg-gray-700 text-white rounded-md hover:opacity-90">Create Event</button>
      </div>
    </form>
  );
}
