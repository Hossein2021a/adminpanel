import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { useStateContext } from '../Contexts/Contextprovider';


export default function ColorPicker() {

    const {currentColor , setCurrentColor} = useStateContext()

    function change(args) {
        document.getElementById('previeww').style.backgroundColor = args.currentValue.hex;
        let x = args.currentValue.hex
        setCurrentColor(x)
    }
    
  return (
    <div>

        <div className='m-10 bg-secondary-dark-bg rounded-xl text-center p-8 flex justify-center items-center flex-col gap-5 '>

            <div id='previeww' className=' bg-center bg-pen w-[250px] md:w-[64%] h-[35px] md:h-[80px] bg-contain bg-no-repeat '></div>

            <div id='inline-content' className='row sm:flex gap-10 '>
            <div className='col-xs-12 col-sm-12 col-lg-6 col-md-6'>
              <h4 className='dark:text-white'>Inline Palette</h4>
              <ColorPickerComponent id='inline-palette' mode='Palette' modeSwitcher={false} inline={true} showButtons={false} change={change}></ColorPickerComponent>
            </div>
            <div className='col-xs-12 col-sm-12 col-lg-6 col-md-6'>
              <h4 className='dark:text-white'> Inline Picker</h4>
              <ColorPickerComponent id='inline-picker' mode='Picker' modeSwitcher={false} inline={true} showButtons={false} change={change}></ColorPickerComponent>
            </div>
          </div>
           
        </div>
      
    </div>
  )
}
