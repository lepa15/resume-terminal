type AboutInfo = {
    name: string;
    role: string;
    bio: string;
    location: string;
};

const aboutMe: AboutInfo = {
    name: 'Алексей Олейник',
    role: 'Frontend Developer',
    bio: 'Люблю создавать быстрые, доступные и красивые интерфейсы.',
    location: 'Тирасполь, Молдова',
};

export default function About() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-900 text-white p-6">
            <div className="max-w-xl text-center space-y-4">
                <h1 className="text-4xl font-bold">{aboutMe.name}</h1>
                <h2 className="text-2xl text-gray-300">{aboutMe.role}</h2>
                <p className="text-gray-400">{aboutMe.bio}</p>
                <p className="text-gray-500">{aboutMe.location}</p>
            </div>
        </div>
    );
};
