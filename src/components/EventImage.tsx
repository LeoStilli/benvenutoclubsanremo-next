"use client";

interface EventImageProps {
  eventType: string;
  title: string;
  className?: string;
}

const EventImage: React.FC<EventImageProps> = ({ eventType, title, className = "" }) => {
  const getEventStyle = (type: string) => {
    const styles = {
      'film-night': {
        gradient: 'bg-gradient-to-br from-red-600 to-red-800',
        icon: '🎬',
        pattern: 'opacity-20 absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      },
      'monthly-lunch': {
        gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
        icon: '🍽️',
        pattern: 'opacity-20 absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      },
      'pasta-workshop': {
        gradient: 'bg-gradient-to-br from-green-600 to-green-800',
        icon: '🍝',
        pattern: 'opacity-20 absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M12 0h6v60h-6z M30 0h6v60h-6z M48 0h6v60h-6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      },
      'anniversary': {
        gradient: 'bg-gradient-to-br from-purple-600 to-purple-800',
        icon: '🎉',
        pattern: 'opacity-20 absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M30 30m-4 0a4 4 0 1 1 8 0a4 4 0 1 1 -8 0 M10 10m-4 0a4 4 0 1 1 8 0a4 4 0 1 1 -8 0 M50 10m-4 0a4 4 0 1 1 8 0a4 4 0 1 1 -8 0 M10 50m-4 0a4 4 0 1 1 8 0a4 4 0 1 1 -8 0 M50 50m-4 0a4 4 0 1 1 8 0a4 4 0 1 1 -8 0"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      },
      'tennis': {
        gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
        icon: '🎾',
        pattern: 'opacity-20 absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M0 20h60v20H0z M20 0v60H40V0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      },
      'default': {
        gradient: 'bg-gradient-to-br from-gray-500 to-gray-700',
        icon: '📅',
        pattern: 'opacity-20 absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'
      }
    };

    return styles[type as keyof typeof styles] || styles.default;
  };

  const style = getEventStyle(eventType);

  return (
    <div className={`relative w-full h-full ${style.gradient} ${className} flex items-center justify-center overflow-hidden rounded`}>
      <div className={style.pattern}></div>
      <div className="relative z-10 text-center text-white">
        <div className="text-4xl mb-2">{style.icon}</div>
        <div className="text-sm font-medium px-4 leading-tight">{title}</div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
    </div>
  );
};

export default EventImage;