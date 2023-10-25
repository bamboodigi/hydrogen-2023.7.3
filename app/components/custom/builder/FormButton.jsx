import { 
  PatchATCButton 
} from "~/components";


export function FormButton({ formData, config, handlePrevious, handleNext, currentStep, steps }) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
    return (
      <>
        <div className="col-span-6 flex w-full font-bold text-white text-copy">
          <button
            type="button"
            className={classNames(
              currentStep === 1 ? "hidden" :
                currentStep === steps.length ? "flex-grow-1" : "",
              "transition flex-1 rounded-l-full items-center justify-center p-3 bg-contrast border-2 border-contrast hover:bg-white hover:text-contrast text-copy xl:text-2xl",
            )}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <div className={classNames(
            currentStep === 1 ? "rounded-l-full border-2 w-[60%]" :
              currentStep === steps.length ? "rounded-r-full border-2 w-[70%]" : "",
            "transition bg-transparent border-t-2 border-b-2 border-contrast font-bold px-2")}>
            <PatchATCButton
              formData={formData}
              config={config}
              currentStep={currentStep}
              steps={steps}
              className={classNames(
                currentStep === 1 ? "" :
                  currentStep === steps.length ? "" : "",
                "transition text-contrast flex-1 relative py-3 bg-transparent font-bold px-2")} />
          </div>
          <button
            type="button"
            className={classNames(
              currentStep === steps.length ? "hidden" :
                currentStep === 1 ? "flex-grow-1" : "",
              "transition flex-1 rounded-r-full items-center justify-center p-3 bg-contrast border-2 border-contrast hover:bg-white hover:text-contrast text-copy xl:text-2xl",
            )}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </>
    );
  }