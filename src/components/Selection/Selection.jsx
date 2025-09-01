import { SelectionStep1 } from './SelectionSteps/SelectionStep1/SelectionStep1'
import { SelectionStep2 } from './SelectionSteps/SelectionStep2/SelectionStep2'
import { SelectionStep3 } from './SelectionSteps/SelectionStep3/SelectionStep3'
import { SelectionStep4 } from './SelectionSteps/SelectionStep4/SelectionStep4'
import { useState } from 'react'
import styles from './style.module.css'

export default function Selection () {

    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({})

    const handleSubmit = (stepData) => {

        const updatedData = { ...formData, ...stepData };
        setFormData(updatedData);

        if(currentStep < 4) {
            setCurrentStep(prev => prev + 1)
        } else {
            console.log('✅ ВСЕ ДАННЫ ФОРМЫ:', updatedData);
        }


        

    }

    const renderCurrentStep = () => {
        switch(currentStep) {
            case 1:
                return <SelectionStep1 onSubmit={handleSubmit} currentStep={currentStep}/>;
            case 2:
                return <SelectionStep2 onSubmit={handleSubmit} currentStep={currentStep}/>;
            case 3:
                return <SelectionStep3 onSubmit={handleSubmit} currentStep={currentStep}/>;
            case 4:
                return <SelectionStep4 onSubmit={handleSubmit} formData={formData}/>;
            default: 
                return <SelectionStep1 onSubmit={handleSubmit} currentStep={currentStep}/>;
        }
    }

    return (
        <section className={styles.selection}>
            
            {renderCurrentStep()}
            
        </section>
    )
}