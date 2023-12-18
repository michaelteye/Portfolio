import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-[#323232] p-8 shadow-2xl dark:bg-dark-2 sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white hover:bg-blue-300 transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div></div>
              </div>
            </div> 
  )
}
export const ContactTextArea = ({
    row,
    placeholder,
    name,
    defaultValue,
  }: any) => {
    return (
      <>
        <div className="mb-6">
          <textarea
            rows={row}
            placeholder={placeholder}
            name={name}
            className="w-full resize-none rounded text-black border border-stroke px-[14px] py-3 text-base "
            defaultValue={defaultValue}
          />
        </div>
      </>
    );
  };
  
  export const ContactInputBox = ({ type, placeholder, name }: any) => {
    return (
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-black"
        />
      </div>
    );
  };

export default ContactForm