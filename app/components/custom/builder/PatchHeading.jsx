// Import React hooks and components
import {
  Heading
} from '~/components';


export function PatchHeading({ formData, methods }) {
  const isMini = methods.helpers.is.mini;
  const isFlag = methods.helpers.is.flag;

  const classNames = methods.helpers.utility.classNames;

  return (
    <>
      <div className="grid gap-2">
        <Heading as="h1" className={classNames(formData.type.toLowerCase() == 'jacket panel' ? "text-2xl " : "text-3xl ", "leading-[2rem] pr-5 sm:pr-0 whitespace-normal")}>
          <span className="mr-2">
            {formData.size.current}
          </span>
          {methods.helpers.get.title(formData.size.current, formData.type)}
          {/* {isMini(formData.type, formData.size.current) && (
            <span className="">Mini </span>
          )
          }
          {
            formData.type.toLowerCase().includes("medical patch") && formData.size.current == '1” x 1”' ? (
              <>
                Cats Eye
              </>
            ) : formData.type.toLowerCase().includes("medical patch") && formData.size.current == '3.5” x 2”' ? (
              <>
                Medical ID Panel
              </>
            ) : formData.type.toLowerCase().includes("light sabers") ? (
              <>
                Light Saber
              </>
            ) : formData.type.toLowerCase().includes("flag") ? (
              <>
                <span className="block mt-2">
                  {formData.img.type}
                </span>
              </>
            ) : formData.type.toLowerCase() == ("jacket panel") ? (
              <>
                - {methods.helpers.get.patch.jacketPanel.title(formData.size.current)} <br></br>Jacket Panel
              </>
            ) : (
              <>
                {formData.type}
              </>
            )
          }


          {
            formData.type.toLowerCase().includes("light sabers") && (
              <>
                <span className="text-xl mt-2 uppercase block">{formData.lightsaber.saberType}</span>
              </>
            )
          } */}

          {isFlag(formData.type, formData.img.enabled) && (
            <span className="text-xl mt-2 uppercase block">with {formData.img.type}</span>
          )
          }
        </Heading>
      </div>
    </>
  )
}