import React from 'react'
import {Controller} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'


// creating an real time editor with multiple functionality which a basic form can't provide 
//using tinymce and Controller  
function RealTimeEditor(
    name,control,label, defaultValue = ""
) {
    
  return (
    <div className='w-full'>
       {
        label && <label className='inline-block mb-1 pl-1'>
          {label}
        </label>
       }
       <Controller
       name={name || "content"}
       control={control}
       render={({field : {onchange}}) => (
        <Editor 
        initialValue={defaultValue}
        init={{
            branding : false,
            height: 500,
            menubar: true,
            plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
         onEditorChange={onchange}

        />
       )}
       />
    </div>
  )
}

export default RealTimeEditor
