import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            <Button type="submit" variant="default" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}