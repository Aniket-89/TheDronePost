import { useState, useEffect, useMemo } from "react";

const ComingSoonPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Set launch date
  const launchDate = useMemo(() => new Date("2025-01-01T00:00:00"), []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://sheetdb.io/api/v1/8il6cfn5h3m0q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
      });

      if (response.ok) {
        setMessage("Thank you! You’ll be notified soon.");
        setEmail("");
      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      console.error(error);
      setMessage("Error connecting to SheetsDB. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center relative h-screen w-full text-white p-2">
      <video
        src="./bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full z-[-1] top-0 left-0 object-cover opacity-65"
      ></video>
      <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm shadow-lg rounded-md">
        <img
          src="./tdp.png"
          alt=""
          className="md:w-[228px] w-[160px] aspect-[5/4] object-cover mb-6 bg-softWhite rounded-sm"
        />
        <h1 className="md:text-5xl text-3xl sm:text-4xl font-bold mb-4 ">
          We are Coming Soon!
        </h1>
        <p className="text-lg mb-6 text-darkGray text-justify">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex space-x-4 justify-center mb-6 bg-richNavy text-muted rounded-sm p-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center p-2">
              <p className="text-4xl font-bold">{value}</p>
              <p className="uppercase text-sm">{unit}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-2 w-full justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email to get notified"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-sm text-black sm:w-64 w-full"
          />
          <button
            type="submit"
            className="bg-darkGray px-6 py-2 rounded-sm hover:bg-primary transition w-full sm:w-auto"
          >
            Notify Me
          </button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default ComingSoonPage;
