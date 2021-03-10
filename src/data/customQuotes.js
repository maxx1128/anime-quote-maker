const mq = (content, author) => {
  return {
    "content": content,
    "author": author
  }
};

const allQuotes = [
  mq("Books don't change genres, they just advance their plot. People are the same.", "Mosele"),
  mq("Haven’t you already lifted your foot, preparing to step forward? Then you only have one option. Finish taking that step!", "Kano"),
  mq("Crying is a nosebleed of the heart.", "Kushieda"),
  mq("My happiness can only be made with my own hands! My happiness doesn’t depend on anyone but me!", "Kushieda"),
  mq("If you trip while running down a hallway, you’ll get a nosebleed. If you trip in life, you’ll cry.", "Kushieda"),
  mq("Even when the sky’s so dark you can’t see a thing, there are still stars shining out there. So if she can learn to shine brighter, we’ll be able to see her.", "Kushieda"),
  mq("I don’t want to get so caught up in searching for what I can’t see, that I lose sight of what I can.", "Kushieda"),
  mq("Adoration never leads to a balanced relationship.", "Kawashima"),
  mq("It’s difficult to like me when I’m being myself.", "Kawashima"),
  mq("Since ancient times, the dragon has been the only beast to equal the tiger. Even if you’re not by my side right now, I will leap through space and time and always be by your side. These feelings will never change.", "Takasu"),
  mq("It doesn’t matter if you grew up without parents, and it doesn’t matter if you don’t believe in God. There’s someone out there watching over you.", "Aisaka"),
  mq("It’s not about being right or being wrong. There are more important things than that. That’s why apologies and forgiveness become necessary.", "Aisaka"),
  mq("Having someone saying you’re okay as you are and being needed by that person...It was nice to have someone like that.", "Aisaka"),
  mq("Those stars look like they’re close to each other, but they’re actually very far away, aren’t they?", "Aisaka"),
  mq("The thing you wished for the most, is something you’ll never get.", "Aisaka"),
  mq("People...need to be needed by someone in order to live. If a person isn’t needed, they’re worthless!", "Kiryuu"),
  mq("It is those who possess wisdom who are the greatest fools. History has shown us this. You could say that this is the final warning from God to those who resist.", "Okabe"),
  mq("Remembering something that no one else can is a painful thing. You can’t talk to anyone about it. No one will understand you. You’ll be alone.", "Okabe"),
  mq("Keep the past, for all intents and purposes, where it is.", "Okabe"),
  mq("If you want to grant your own wish, then you should clear your own path to it.", "Okabe"),
  mq("Theories are nothing more than words. Accept what you’ve seen.", "Okabe"),
  mq("Conspiracy’s evil influence is much closer than you think, and is always ready to deceive you!", "Okabe"),
  mq("99% of perception that normal humans have are closed off. Those who don’t think of themselves are quite foolish beings.", "Okabe"),
  mq("What kind of mad scientist worries about not getting enough vegetables?", "Okabe"),
  mq("Every brilliant day should be lived for those who passed away.", "Makise"),
  mq("The passage of time depends entirely on where you’re standing. Relativity Theory...it’s so romantic. But it’s just so tragic too.", "Makise"),
  mq("A strong love for someone...a strong belief in something...a strong desire to convey something...if all those things go beyond time to create 'you,' that would be magnificent.", "Makise"),
  mq("I’ve only lived 18 years, but I don’t want to change any of them. They’re all part of my life, even the failures.", "Makise"),
  mq("Everyone is watching someone other than themselves, someone important to them.", "Makise"),
  mq("People’s feelings are memories that transcend time.", "Makise"),
  mq("Everyone gets help from someone else at some point in their lives. So someday, you should help someone too.", "Amane"),
  mq("We should work towards world peace. Like giving everyone in the world an Upa cushion.", "Shiina"),
  mq("It’s always very easy to declare that other people are idiots, but only if you forget how idiotically difficult being human is.", "Backman"),
  mq("We don’t have a plan, we just do our best to get through the day, because there’ll be another one coming along tomorrow.", "Backman"),
  mq("Do you know what the worst thing about being a parent is? That you’re always judged by your worst moments. You can do a million things right, but if you do one single thing wrong you’re forever that parent who was checking his phone in the park when your child was hit in the head by a swing.", "Backman"),
  mq("Sometimes it’s easier to live with your own anxieties if you know that no one else is happy, either.", "Backman"),
  mq("Because the terrible thing about becoming an adult is being forced to realize that absolutely nobody cares about us, we have to deal with everything ourselves now, find out how the whole world works.", "Backman"),
  mq("We give those we love nicknames, because love requires a word that belongs to us alone.", "Backman"),
  mq("Good grief, no one could cope with being newly infatuated, year after year. When you’re infatuated you can’t think about anything else, you forget about your friends, your work, your lunch. If we were infatuated all the time we’d starve to death. And being in love means being infatuated… from time to time. You have to be sensible.", "Backman"),
  mq("The truth of course is that if people really were as happy as they look on the Internet, they wouldn’t spend so much damn time on the Internet.", "Backman"),
  mq("Some people accept that they will never be free of their anxiety, they just learn to carry it.", "Backman"),
  mq("When you’ve been stuck with each other long enough it can seem like there’s no difference between no longer arguing and no longer caring.", "Backman"),
  mq("Nothing is easier for people who never do anything themselves than to criticize someone who actually makes an effort.", "Backman"),
  mq("Do you know how many men like you every single woman on the planet meets every day, who think that every thought that pops into your tiny little male brains is a lovely present you can give us?", "Backman"),
  mq("Humor is the soul’s last line of defense, and as long as we’re laughing we’re alive, so bad puns and fart jokes were their way of expressing their defiance against despair.", "Backman"),
  mq("These good men aren’t making the rules. These decent men are turning a blind eye to indecent acts.", "Bayron"),
  mq("When the leader of this kingdom treats women as property, it sets an awful precedent. People think it’s okay to do the same.", "Bayron"),
  mq("You will hear people speak of light and dark, but in my experience you must be well versed in both to find a balance.", "Bayron"),
  mq("If you drop a frog in a pot of boiling water, it will jump out. But if you stoke the fire slowly, it will allow itself to be boiled to death.", "Bayron"),
  mq("A prison is still a prison no matter how pretty the decor.", "Bayron"),
  mq("There is always fear, always doubt. The only thing that matters is that you push forward.", "Bayron"),
  mq("You know, like brilliance, I never find [being drunk] a decent excuse for being an asshole.", "Roberts"),
  mq("Never trust your future self", "Anonymous")
]

const randomCustomQuote = () => allQuotes[Math.floor(Math.random() * allQuotes.length)];

export default randomCustomQuote;
