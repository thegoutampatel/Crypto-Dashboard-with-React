import { IoMdMail } from "react-icons/io";

const ContactLeft = () => {
  return (
    <div className=" flex flex-col gap-2 ml-5 mt-2">
        <div className=" text-[#5F00D9]"><IoMdMail/></div>
        <h1 className="text-[32px]">Contact Us</h1>
        <p className="text-[14px] text-[#535D66]">Have a question or just want to know more? Feel free to <br /> reach out to us.</p>
    </div>
  )
}

export default ContactLeft