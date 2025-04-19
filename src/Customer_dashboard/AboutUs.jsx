import React from 'react'
import {
  RotateCcw,
  Circle,
  Heart,
  Star,
} from "lucide-react";
function AboutUs() {
  const items = [
    {
      title: "TORTOR TELLUS CRAS",
      description:
        "Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condi mentum nibh.",
    },
    {
      title: "DOLOR FUSCE LIGULA",
      description:
        "Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condi mentum nibh.",
    },
    {
      title: "INCEPTOS DOLOR MOLLIS",
      description:
        "Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condi mentum nibh.",
    },
  ];
  const features = [
    {
      title: "CONDITMENTUM PORTA AEANEN",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.",
      icon: <RotateCcw size={18} />,
    },
    {
      title: "ETIAM JUSTO ULLAMCORPER",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.",
      icon: <Circle size={18} />,
    },
    {
      title: "INCEPTOS VULPUTATE FUSCE",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.",
      icon: <Heart size={18} />,
    },
    {
      title: "DAPIBUS MATTIS PARTURIENT",
      description:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.",
      icon: <Star size={18} />,
    },
  ];
  return (
    <div>

      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {items.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-gray-800 text-lg uppercase">
                {item.title}
              </h3>
              <div className="w-8 h-[2px] bg-gray-300 mx-auto md:mx-0"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-cover bg-center text-white py-16 px-4 md:px-12 my-10" style={{ backgroundImage: `url('/assets/standard.jpg')` }}>

        {/* Overlay to make background dull */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">
              Story About Us
            </h2>
            <p className="text-sm leading-6 mb-2">
              Cras mattis consectetur purus sit amet fermentum. Etiam porta sem
              malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque
              ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget
              risus varius blandit sit amet non magna. Cras justo odio, dapibus ac
              facilisis in.
            </p>
            <p className="text-sm leading-6 mb-2">
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam
              eget risus varius blandit sit amet non magna.
            </p>
            <p className="text-sm leading-6">
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus
              sagittis lacus vel augue laoreet rutrum.
            </p>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-6 p-6">
            <div>
              <p className="text-sm font-semibold mb-1">Social Networks</p>
              <div className="w-full bg-white bg-opacity-20 rounded h-2">
                <div className="bg-teal-400 h-2 rounded w-[80%]"></div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-1">Business Planning</p>
              <div className="w-full bg-white bg-opacity-20 rounded h-2">
                <div className="bg-teal-400 h-2 rounded w-[65%]"></div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mb-1">Art & Design</p>
              <div className="w-full bg-white bg-opacity-20 rounded h-2">
                <div className="bg-teal-400 h-2 rounded w-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side: Mobile image */}
          <div className="flex justify-center">
            <img
              src="/assets/phone.jpg" // replace with actual path
              alt="Mobile Preview"
              className="w-full"
            />
          </div>

          {/* Right side: Feature list */}
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase text-gray-800">
                  {feature.icon}
                  {feature.title}
                </div>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs