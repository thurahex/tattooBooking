

import React from 'react'

export default function PickupForm() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    const handleFileUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        // Replace 'YOUR_UPLOAD_API_ENDPOINT' with the actual API endpoint for file upload
        const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          setIsFileUploaded(true);
          console.log('File uploaded successfully!');
        } else {
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('Error during file upload:', error);
      }
    };
  


  return (
    
    <div className='flex flex-col w-[400px] gap-3 mt-5'>

        <input type="text" name='name' className='px-3 py-2 focus-within:outline-none font-bold' />
        <input type="date" className='focus-within:outline-none' />
        <input type="file" />

        <button type='submit' className='bg-white font-bold  opacity-80 focus:opacity-100'>Book</button>
        
    </div>
  )
}
