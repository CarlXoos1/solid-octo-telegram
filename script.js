(() => {
  "use strict";
const Q = (q, correct, wrong, why) => ({ q, correct, wrong, why });

  /* ---------- Data ---------- */
  const TOPICS = [
    {
      id: "socrates", name: "Socrates", sub: "Knowing the Self", color: "var(--pink)",
      questions: [
        Q("Who said, “The unexamined life is not worth living”?", "Socrates", ["Plato", "Aristotle", "Confucius"], "This famous line is associated with *Socrates* and his emphasis on self-examination."),
        Q("What is the Socratic method?", "Asking questions to examine beliefs and assumptions", ["Memorizing facts from a teacher", "Following tradition without question", "Observing only the physical world"], "The Socratic method uses *questions* to test beliefs and assumptions."),
        Q("According to Socrates, why is self-examination important?", "It helps people truly know themselves", ["It makes people wealthy", "It replaces all learning", "It avoids all disagreement"], "Self-knowledge is the heart of Socrates' view of the self."),
        Q("Which key concept is paired with Socrates?", "Self-examination", ["Eudaimonia", "Alienation", "Übermensch"], "In the review table, Socrates is paired with *self-examination*."),
        Q("How does critical thinking help a person understand the self?", "It questions beliefs instead of simply accepting them", ["It avoids hard questions", "It copies the opinions of others", "It ignores personal experience"], "Critical thinking lets us examine our beliefs and assumptions."),
        Q("A student asks, “Why do I believe this, and is it really true?” Which idea does this show?", "Socratic questioning", ["Class struggle", "Filial piety", "Mind-body dualism"], "Examining one's own beliefs through questions is the Socratic approach."),
        Q("Which tradition does Socrates belong to?", "Western thought", ["Eastern thought", "Buddhist thought", "Confucian thought"], "Socrates is listed among the Western thinkers who emphasize self-examination."),
        Q("Which phrase is **NOT** associated with Socrates?", "Cogito, ergo sum", ["The unexamined life is not worth living", "Self-examination", "Questioning assumptions"], "*Cogito, ergo sum* belongs to Descartes."),
        Q("A person never questions how they live and just follows routine. Which statement would Socrates most likely make?", "Such a life is not worth living if it is never examined", ["That life is already perfect", "Questions only cause trouble", "Reflection is a waste of time"], "Socrates stressed that life should be examined."),
        Q("In the Socratic method, what is the main way of learning?", "Dialogue through questions", ["Silent memorization", "Inherited authority alone", "Avoiding debate"], "The method works through questioning and dialogue."),
        Q("Why does Socrates ask people to examine their assumptions?", "To find out whether their beliefs are well-founded", ["To prove everyone wrong", "To avoid thinking", "To protect tradition at all costs"], "Examining assumptions reveals whether a belief is truly justified."),
        Q("Which question best reflects Socratic thinking?", "“What do I really mean by this, and why do I believe it?”", ["“What will everyone else say?”", "“How can I avoid thinking about it?”", "“Who can I blame?”"], "Socratic questions probe meaning and reasons."),
        Q("What does Socrates mainly encourage people to do?", "Examine their own lives and beliefs", ["Accumulate material goods", "Follow every social expectation", "Focus only on the body"], "The pointers highlight self-knowledge and self-examination."),
        Q("A student reflects on why they chose their course before enrolling. What does this illustrate?", "Self-examination", ["Alienation", "The Übermensch", "Filial piety"], "Thinking carefully about one's choices is self-examination."),
        Q("Which description fits Socrates best?", "A thinker who stresses self-knowledge through questioning", ["A thinker who stresses class struggle", "A thinker who stresses the three parts of the soul", "A thinker who stresses filial piety"], "Socrates is the philosopher of self-knowledge and questioning.")
      ]
    },
    {
      id: "plato", name: "Plato", sub: "The Three Parts of the Soul", color: "var(--peach)",
      questions: [
        Q("What are the three parts of the soul according to Plato?", "Reason, spirit, and appetite", ["Mind, body, and heart", "Virtue, habit, and flourishing", "I, me, and society"], "Plato divides the soul into *reason*, *spirit*, and *appetite*."),
        Q("Which part of the soul thinks, analyzes, and makes judgments?", "Reason", ["Spirit", "Appetite", "Habit"], "Reason is the thinking part of the soul."),
        Q("Which part of the soul represents courage, pride, and determination?", "Spirit", ["Reason", "Appetite", "Culture"], "Spirit stands for courage, pride, and determination."),
        Q("Which part of the soul represents desires and physical needs?", "Appetite", ["Reason", "Spirit", "Forms"], "Appetite covers desires and bodily needs."),
        Q("According to Plato, which part should guide the other parts?", "Reason", ["Appetite", "Spirit", "None of them"], "Reason should guide the spirit and the appetite."),
        Q("A student feels hungry during an exam review but keeps studying. Which part is being guided by reason?", "Appetite", ["Spirit", "Forms", "Culture"], "Hunger is a physical need, so it belongs to the *appetite*."),
        Q("A person stands up for what is right despite fear. Which part of the soul is shown?", "Spirit", ["Appetite", "Reason only", "The body"], "Courage and determination belong to *spirit*."),
        Q("What does the Theory of Forms distinguish?", "Changing physical things and ideal Forms", ["Rich and poor classes", "The “I” and the “Me”", "Parents and children"], "Plato contrasts changing physical things with ideal *Forms*."),
        Q("How does Plato describe physical things in the Theory of Forms?", "They are changing", ["They are perfect and eternal", "They do not exist", "They are the same as Forms"], "Physical things change, while the ideal Forms are the standard."),
        Q("Which key concept is paired with Plato?", "Three parts of the soul; Theory of Forms", ["Cogito, ergo sum", "Class struggle", "Filial piety"], "These two ideas are listed beside Plato."),
        Q("Why should reason guide the soul?", "So choices follow careful judgment instead of impulse", ["So desires are always ignored", "So courage is removed", "So thinking stops"], "Reason brings judgment and balance to the other parts."),
        Q("A student decides to rest after carefully weighing the pros and cons. Which part is leading?", "Reason", ["Appetite", "Spirit", "Alienation"], "Weighing and judging is the work of *reason*."),
        Q("Which pair is matched correctly?", "Spirit: courage", ["Reason: physical needs", "Appetite: judgment", "Spirit: desires"], "*Spirit* represents courage, pride, and determination."),
        Q("Which thinker is linked to the idea of the soul and reason in Western thought?", "Plato", ["Marx", "Confucius", "Mead"], "The Western thought section links Plato with the soul and reason."),
        Q("Which phrase does **NOT** belong to Plato?", "Filial piety", ["Reason", "Appetite", "Theory of Forms"], "*Filial piety* is a Confucian concept.")
      ]
    },
    {
      id: "aristotle", name: "Aristotle", sub: "Reason, Virtue, and Flourishing", color: "var(--butter)",
      questions: [
        Q("According to Aristotle, what are humans?", "Rational beings", ["Purely physical machines", "Products of class only", "Beings with no self"], "Aristotle sees humans as *rational beings*."),
        Q("How does virtue develop?", "Through practice and habit", ["Only by luck", "Only by reading a definition", "Without any effort"], "Virtue grows through repeated practice and habit."),
        Q("What is eudaimonia?", "Human flourishing; a good and meaningful life", ["Total isolation", "Pure physical pleasure", "A type of class struggle"], "*Eudaimonia* means living a good and meaningful life."),
        Q("Which key concepts are paired with Aristotle?", "Virtue and eudaimonia", ["Alienation and class struggle", "Cogito and dualism", "Anatta and harmony"], "These two ideas are listed beside Aristotle."),
        Q("A person becomes honest by practicing honesty again and again. What does this show?", "Virtue develops through habit", ["Virtue is purely inborn", "Habits do not matter", "Honesty is only a feeling"], "Repeated virtuous actions build virtue."),
        Q("What is the relationship among reason, good habits, and ethical decisions?", "Reason and good habits together support ethical decisions", ["They have no relationship", "Habits should replace reason", "Ethics is only luck"], "Aristotle links reason and habit to good choices."),
        Q("How do people develop their potential, according to Aristotle?", "Through virtuous actions", ["Through avoiding effort", "Through ignoring reason", "Through copying others blindly"], "Potential is developed by acting virtuously."),
        Q("A student studies a little every day and slowly becomes disciplined. Which idea is illustrated?", "Virtue through practice and habit", ["The Übermensch", "The looking-glass self", "Mind-body dualism"], "Discipline grows through daily practice."),
        Q("Which word describes living well and flourishing?", "Eudaimonia", ["Anatta", "Cogito", "Alienation"], "*Eudaimonia* is human flourishing."),
        Q("Which concept does **NOT** belong to Aristotle?", "Cogito, ergo sum", ["Virtue", "Eudaimonia", "Rational beings"], "*Cogito, ergo sum* belongs to Descartes."),
        Q("Which tradition is Aristotle part of?", "Western thought", ["Eastern thought", "Buddhism", "Confucianism"], "Aristotle is listed under *virtue and flourishing* in Western thought."),
        Q("Which statement best fits Aristotle?", "Good character is built by repeated good actions", ["Character cannot change", "Society alone decides who we are", "There is no self"], "Habit and practice shape virtue."),
        Q("What guides a person toward ethical decisions in Aristotle's view?", "Reason and good habits", ["Impulse alone", "Social class only", "Doubt alone"], "Both reason and habit matter."),
        Q("Which pair is matched correctly?", "Aristotle: eudaimonia", ["Aristotle: alienation", "Aristotle: Übermensch", "Aristotle: anatta"], "*Eudaimonia* is Aristotle's key concept."),
        Q("A person volunteers regularly and becomes more generous over time. What does this show?", "Virtue grows through repeated action", ["Virtue appears without practice", "Generosity is only inherited", "Habits have no effect on character"], "Regular acts of kindness build virtue.")
      ]
    },
    {
      id: "descartes", name: "René Descartes", sub: "The Thinking Self", color: "var(--mint)",
      questions: [
        Q("What does “Cogito, ergo sum” mean?", "“I think, therefore I am”", ["“Know thyself”", "“The unexamined life is not worth living”", "“I act, therefore I flourish”"], "*Cogito, ergo sum* means “I think, therefore I am.”"),
        Q("Who is known for the cogito?", "René Descartes", ["Socrates", "Karl Marx", "Confucius"], "The cogito is the best-known idea of Descartes."),
        Q("What does thinking serve as, according to Descartes?", "Evidence of one's existence as a thinking being", ["Proof of one's social class", "A sign of one's habits", "A rejection of the mind"], "Thinking shows that one exists as a thinking being."),
        Q("What is mind-body dualism?", "The distinction between the mind and the body", ["The unity of society and culture", "The struggle between classes", "The balance of virtue and vice"], "Dualism separates the *mind* from the *body*."),
        Q("What role does doubt play in Descartes' view of the self?", "It is a tool for examining what can be known", ["It is something to avoid completely", "It replaces reason", "It proves the self does not exist"], "Doubt, reason, and reflection help in understanding the self."),
        Q("Which tools are used in understanding the self, according to the pointers?", "Doubt, reason, and reflection", ["Class, labor, and capital", "Roles, norms, and culture", "Habit, virtue, and luck"], "Descartes uses doubt, reason, and reflection."),
        Q("What kind of self does Descartes emphasize?", "The thinking self", ["The social self", "The economic self", "The no-self"], "His section is titled *The Thinking Self*."),
        Q("Which key concepts are paired with Descartes?", "Cogito, ergo sum; mind-body dualism", ["Virtue; eudaimonia", "Class struggle; alienation", "Filial piety; moral cultivation"], "These are the two concepts listed beside him."),
        Q("A person doubts everything but realizes that doubting is itself thinking. Which idea is this?", "Cogito, ergo sum", ["Alienation", "The Übermensch", "Filial piety"], "Even in doubt, the thinker must exist."),
        Q("Which phrase does **NOT** belong to Descartes?", "Filial piety", ["Cogito, ergo sum", "Mind-body dualism", "Doubt and reflection"], "*Filial piety* is a Confucian concept."),
        Q("Which tradition is Descartes part of?", "Western thought", ["Eastern thought", "Buddhist thought", "Confucian thought"], "Descartes is listed under Western thought as the thinking self."),
        Q("Which statement expresses mind-body dualism?", "The mind and the body are distinct", ["The mind and body are exactly the same", "Only society exists", "Only the body matters"], "Dualism holds that mind and body are distinct."),
        Q("Why is reflection important for Descartes?", "It helps examine one's own thoughts and existence", ["It makes thinking unnecessary", "It avoids doubt", "It focuses only on others"], "Reflection is part of understanding the self."),
        Q("Which pair is matched correctly?", "Descartes: cogito", ["Descartes: alienation", "Descartes: eudaimonia", "Descartes: anatta"], "The cogito is Descartes' signature idea."),
        Q("Which action best shows Cartesian thinking?", "Questioning everything to find what is certain", ["Accepting every belief without question", "Ignoring one's own thoughts", "Following a crowd"], "Descartes uses doubt and reason to search for certainty.")
      ]
    },
    {
      id: "marx", name: "Karl Marx", sub: "Society, Labor, and the Self", color: "var(--sky)",
      questions: [
        Q("What does Marx say strongly influences human life?", "Economic conditions and social class", ["Only personal thoughts", "Only genetics", "Only religion"], "Marx focuses on economic conditions and *social class*."),
        Q("Which pair of ideas is associated with Marx?", "Class struggle and alienation", ["Virtue and eudaimonia", "Cogito and dualism", "Anatta and harmony"], "These are Marx's key concepts in the review table."),
        Q("What is alienation?", "Feeling disconnected from one's work, its products, other people, or one's human potential", ["Feeling proud of one's work", "Following the rules of society", "Being rich and successful"], "*Alienation* is a feeling of disconnection."),
        Q("What does class struggle describe?", "Conflict between social classes under capitalism", ["Harmony between family members", "The mind and body relationship", "Learning social norms"], "Marx describes tension between classes in capitalist society."),
        Q("A worker repeats one small task all day with no say in the work. Which concept fits best?", "Alienation", ["Eudaimonia", "Socialization", "The Übermensch"], "Disconnection from one's work is a form of alienation."),
        Q("How do working conditions affect a person, according to Marx?", "They influence identity and opportunities", ["They have no effect", "They only affect clothing", "They only affect the weather"], "Material circumstances shape identity and opportunities."),
        Q("Which topic is central to Marx's view of the self?", "Society, labor, and economics", ["Pure doubt", "Moral cultivation", "Personal virtue only"], "His section is titled *Society, Labor, and the Self*."),
        Q("Which system is connected with class struggle in the pointers?", "Capitalism", ["Filial piety", "Dualism", "Eudaimonia"], "Capitalism and class struggle are listed together."),
        Q("A worker feels no connection to the products they make. This is alienation from what?", "The products of their work", ["Their parents", "Their dreams", "Their weather"], "Alienation can involve disconnection from products."),
        Q("Which concept does **NOT** belong to Marx?", "Eudaimonia", ["Alienation", "Class struggle", "Capitalism"], "*Eudaimonia* belongs to Aristotle."),
        Q("A student from a low-income family has fewer chances to study. Which idea explains this?", "Material circumstances influence opportunities", ["Opportunities are always equal", "Class has no effect", "Virtue is only habit"], "Marx stresses how material circumstances shape opportunities."),
        Q("Which pair is matched correctly?", "Marx: alienation", ["Marx: cogito", "Marx: filial piety", "Marx: anatta"], "*Alienation* is one of Marx's key concepts."),
        Q("Which situation shows disconnection from other people at work?", "Workers compete and feel isolated from one another", ["Coworkers support each other", "A team celebrates together", "Neighbors share a meal"], "Isolation from others is one form of alienation."),
        Q("According to Marx, what shapes identity besides personal choice?", "Social class and economic conditions", ["Only luck", "Only birth order", "Only doubt"], "Economic and social conditions help shape who we are."),
        Q("Which sentence best summarizes Marx?", "Our work and economic conditions shape who we become", ["We are only what we think", "We are only what we eat", "We have no relationship to society"], "Marx connects labor and society to the self.")
      ]
    },
    {
      id: "nietzsche", name: "Friedrich Nietzsche", sub: "Values and Self-Development", color: "var(--lavender)",
      questions: [
        Q("What does Nietzsche encourage people to question?", "Inherited values and conventional morality", ["Their own ability to think", "The existence of numbers", "The need to grow"], "Nietzsche invites us to question inherited values."),
        Q("What does Nietzsche stress about values?", "People should take responsibility for developing their own", ["People should never change", "Values must come only from others", "Values do not matter"], "Personal responsibility and creating one's own values are central."),
        Q("What is the Übermensch?", "A concept of overcoming oneself and creating values", ["A type of social class", "A law of society", "A school subject"], "The *Übermensch* is associated with overcoming oneself and creating values."),
        Q("How is “Übermensch” often translated?", "Overman or Superman", ["Underman", "Thinking man", "Social man"], "It is commonly translated as *Overman* or *Superman*."),
        Q("Which key concepts are paired with Nietzsche?", "Übermensch; questioning conventional values", ["Virtue; eudaimonia", "Cogito; dualism", "Filial piety; moral cultivation"], "These appear beside Nietzsche in the table."),
        Q("Why is personal growth important to Nietzsche?", "It helps a person overcome oneself", ["It guarantees wealth", "It removes all questions", "It copies tradition"], "Self-overcoming is linked to personal growth."),
        Q("What should people do with social expectations?", "Examine them critically", ["Obey them without thought", "Ignore every person", "Memorize them only"], "Nietzsche asks us to critically examine social expectations."),
        Q("A student chooses a career after reflecting on their own values rather than pressure. What does this show?", "Developing one's own values", ["Following inherited values blindly", "Alienation", "Socialization only"], "Choosing by one's own values reflects Nietzschean thinking."),
        Q("Which phrase does **NOT** belong to Nietzsche?", "Filial piety", ["Übermensch", "Questioning conventional values", "Personal responsibility"], "*Filial piety* is a Confucian concept."),
        Q("Which pair is matched correctly?", "Nietzsche: Übermensch", ["Nietzsche: eudaimonia", "Nietzsche: cogito", "Nietzsche: anatta"], "*Übermensch* is his key concept."),
        Q("What does overcoming oneself mean?", "Growing beyond one's current limits", ["Giving up on goals", "Copying others exactly", "Avoiding change"], "Self-overcoming is about growth."),
        Q("Which attitude fits Nietzsche best toward inherited morality?", "Critical questioning", ["Automatic acceptance", "Fear of questions", "Complete silence"], "He asks us to question, not simply accept."),
        Q("What language is the word “Übermensch” from?", "German", ["Latin", "Greek", "Chinese"], "Nietzsche was German, and *Übermensch* is a German word."),
        Q("A person follows every tradition without asking why. What might Nietzsche invite them to do?", "Question and examine those values", ["Follow them even more strictly", "Stop thinking altogether", "Give responsibility to others"], "He urges critical examination of inherited values."),
        Q("Which sentence best summarizes Nietzsche?", "Question inherited values and create your own", ["Accept every value you are given", "Only the body matters", "The self does not exist"], "This captures his focus on values and self-development.")
      ]
    },
    {
      id: "sartre", name: "Jean-Paul Sartre", sub: "Extra Topic: Existentialism", color: "var(--sky)",
      questions: [
        Q("Which famous idea is associated with Jean-Paul Sartre?", "Existence precedes essence", ["Cogito, ergo sum", "The unexamined life is not worth living", "Filial piety"], "Sartre is known for *existence precedes essence*. (This idea is not written in the pointers; it is included because Sartre appears in the key concepts table.)"),
        Q("What does “existence precedes essence” mean?", "We exist first, then define who we are through our choices and actions", ["We are born with a fixed purpose", "Our social class decides our identity", "The self does not exist"], "For Sartre, there is no fixed human nature; we create ourselves through *choices and actions*."),
        Q("What does Sartre stress about human beings?", "Freedom and responsibility for one's choices", ["Obedience to inherited tradition", "A permanent, unchanging soul", "The unimportance of choice"], "Sartre's existentialism stresses *freedom* and *responsibility*."),
        Q("A student decides who they want to become instead of accepting a label others gave them. Which idea fits?", "Existence precedes essence", ["Filial piety", "Alienation", "Anatta"], "Defining oneself through one's own choices reflects Sartre's view."),
        Q("Which statement fits Sartre best?", "We are not born with a fixed purpose; we create ourselves", ["We are born with a fixed essence", "The self is only the body", "Society alone decides who we are"], "Sartre rejects a pre-set purpose; people shape themselves.")
      ]
    },
    {
      id: "confucius", name: "Confucius", sub: "Relationships and Social Harmony", color: "var(--pink)",
      questions: [
        Q("Which idea is paired with Confucius?", "Filial piety; moral cultivation", ["Cogito; dualism", "Class struggle; alienation", "Virtue; eudaimonia"], "These are the key concepts beside Confucius."),
        Q("What is filial piety?", "Respect, care, and devotion toward parents and family elders", ["Doubt about everything", "Competition among classes", "Escape from society"], "*Filial piety* means respect, care, and devotion to parents and elders."),
        Q("What does Confucius emphasize about parents and elders?", "Respect for them", ["Ignoring them", "Avoiding them", "Competing with them"], "Respect for parents and elders is central."),
        Q("What does Confucius emphasize for moral development?", "Proper conduct", ["Pure doubt", "Class conflict", "Bodily desire only"], "Moral development and proper conduct are central."),
        Q("Which values support harmonious relationships?", "Responsibility and respect", ["Rivalry and pride", "Isolation and doubt", "Wealth and fame"], "Responsibility, respect, and harmony are emphasized."),
        Q("How do individuals develop character, according to Confucius?", "Through relationships and social responsibilities", ["Through isolation", "Only through private thoughts", "Only through wealth"], "Character grows within relationships and responsibilities."),
        Q("A child cares for aging parents with respect. Which concept is shown?", "Filial piety", ["Alienation", "The Übermensch", "Cogito"], "Caring for parents is *filial piety*."),
        Q("Which tradition is Confucius part of?", "Eastern thought", ["Western thought", "Greek thought", "Modern European thought"], "Confucianism is listed under Eastern thought."),
        Q("Which term is paired with Confucius for personal growth?", "Moral cultivation", ["Self-overcoming", "Dualism", "Class struggle"], "*Moral cultivation* is a key concept."),
        Q("Which phrase does **NOT** belong to Confucius?", "Cogito, ergo sum", ["Filial piety", "Moral cultivation", "Social harmony"], "*Cogito, ergo sum* belongs to Descartes."),
        Q("A student greets elders respectfully and fulfills duties to the family. What does this reflect?", "Confucian values", ["Marx's alienation", "Descartes' dualism", "Plato's Forms"], "Respect and responsibility reflect Confucian ideas."),
        Q("In Confucian thought, personal development is mostly understood as…", "Connected to relationships and community", ["Separate from others", "Purely private", "Only about wealth"], "Eastern thought often considers growth in relation to others."),
        Q("What does Confucianism stress in social life?", "Harmony", ["Constant conflict", "Total independence", "Loneliness"], "Confucius links the self with social harmony."),
        Q("Which action is the opposite of filial piety?", "Neglecting and disrespecting one's parents", ["Honoring one's elders", "Caring for family", "Showing devotion to parents"], "*Filial piety* means respect, care, and devotion."),
        Q("Which sentence best summarizes Confucius?", "A good person grows through respectful relationships and responsibility", ["A good person stands alone", "A good person rejects all duties", "A good person doubts everything"], "Moral growth happens in relationships and responsibilities.")
      ]
    },
    {
      id: "sociology", name: "Sociology and the Social Self", sub: "Society, Roles, and Culture", color: "var(--mint)",
      questions: [
        Q("What is sociology?", "The study of society, social relationships, institutions, and group behavior", ["The study of stars", "The study of plants", "The study of only the mind"], "Sociology studies society and group behavior."),
        Q("What is socialization?", "Learning the values, norms, roles, and behaviors of society", ["Avoiding all groups", "Inheriting a fixed personality", "Doubting everything"], "Socialization is how we learn society's ways."),
        Q("Who introduced the looking-glass self?", "Charles Horton Cooley", ["George Herbert Mead", "Karl Marx", "Confucius"], "Cooley proposed the *looking-glass self*."),
        Q("What does the looking-glass self say?", "Self-perception is influenced by how we imagine others see and judge us", ["The self is only physical", "The self is unaffected by others", "The self is fixed at birth"], "We form self-images from imagined judgments of others."),
        Q("Who distinguished the “I” and the “Me”?", "George Herbert Mead", ["Charles Horton Cooley", "Aristotle", "Nietzsche"], "Mead made the distinction between the “I” and the “Me.”"),
        Q("In Mead's view, which part is the spontaneous aspect of the self?", "The “I”", ["The “Me”", "The culture", "The institution"], "The “I” is spontaneous."),
        Q("In Mead's view, which part is socially shaped?", "The “Me”", ["The “I”", "Only the body", "Only the mind"], "The “Me” is shaped by society."),
        Q("What are social roles?", "Expected behaviors tied to positions such as student or friend", ["Random moods", "Private dreams", "Natural disasters"], "Roles are the behaviors expected of a position."),
        Q("What is culture?", "Shared beliefs, values, customs, and practices", ["A private opinion", "A physical object", "A type of school"], "Culture influences identity and behavior."),
        Q("Which of these are social institutions?", "Family, school, religion, and government", ["Dreams and moods", "Rain and wind", "Colors and shapes"], "These are organized structures that influence individuals."),
        Q("A student participates more after encouragement from teachers and classmates. What does this show?", "Social interactions can influence behavior and self-perception", ["Behavior never changes", "Only genes matter", "Others have no effect"], "This is the example given in the pointers."),
        Q("Which is an example of a social role?", "Student", ["Rainfall", "A mood", "A season"], "Student is a position with expected behaviors."),
        Q("A child learns to say “po” and “opo” to elders. Which concept is shown?", "Socialization", ["Alienation", "Dualism", "The Übermensch"], "Learning norms of respect is socialization."),
        Q("A student feels shy because they imagine classmates will judge their presentation. Which concept fits?", "The looking-glass self", ["Eudaimonia", "Anatta", "Cogito"], "The self is shaped by imagined judgments of others."),
        Q("Which institution is an example of a place where students learn values and norms?", "School", ["A dream", "A mood", "A color"], "School is a social institution that shapes individuals.")
      ]
    },
    {
      id: "west-east", name: "Western and Eastern Thought", sub: "Perspectives of the Self", color: "var(--peach)",
      questions: [
        Q("Which idea does Western thought often emphasize?", "Individual identity and autonomy", ["Only group identity", "No identity at all", "Strict silence"], "Western thought often stresses individual identity and autonomy."),
        Q("What do many Eastern traditions emphasize?", "Relationships, interconnectedness, and harmony", ["Complete independence", "Only competition", "Only physical strength"], "Eastern thought often stresses relationships and harmony."),
        Q("What is anatta?", "The teaching that there is no permanent, independent self", ["The idea of a thinking self", "The idea of class struggle", "The idea of virtue"], "*Anatta* is a Buddhist teaching about the self."),
        Q("Which tradition teaches anatta?", "Buddhism", ["Confucianism", "Platonism", "Capitalism"], "Buddhism is paired with anatta."),
        Q("Which tradition emphasizes moral cultivation and social responsibility?", "Confucianism", ["Descartes' dualism", "Marxism", "Existentialism"], "Confucianism stresses moral cultivation and social responsibility."),
        Q("Which thinker is listed under Western thought as the thinking self?", "Descartes", ["Confucius", "Buddha", "Mead"], "Descartes is the thinking self."),
        Q("Which thinker is listed under Eastern thought?", "Confucius", ["Socrates", "Plato", "Aristotle"], "Confucius represents Eastern thought here."),
        Q("What should students remember about Western and Eastern perspectives?", "They are broad tendencies, not absolute rules", ["They never overlap", "They are always opposite", "They are exactly the same"], "Both traditions are diverse."),
        Q("Which statement is the most accurate?", "Both traditions contain different understandings of individuality and society", ["Only the West studies the self", "Only the East studies society", "Neither studies human nature"], "The pointers warn against over-simplifying."),
        Q("In Eastern thought, personal development is often considered…", "In relation to others and the community", ["Apart from everyone", "Only in private", "Only in competition"], "Eastern thought links growth with relationships."),
        Q("What does Western thought highlight?", "Reason, personal reflection, and individual responsibility", ["Group harmony only", "No-self only", "Obedience only"], "These are characteristic themes of Western thought."),
        Q("Which pair is matched correctly in Western thought?", "Aristotle: virtue and flourishing", ["Aristotle: anatta", "Aristotle: filial piety", "Aristotle: class struggle"], "Virtue and flourishing belong to Aristotle."),
        Q("Which thinker is paired with self-examination in Western thought?", "Socrates", ["Confucius", "Buddha", "Marx"], "Socrates stresses self-examination."),
        Q("What does “anatta” suggest about the self?", "It is not permanent or independent", ["It is fixed forever", "It is purely rational", "It is only a body"], "Anatta means non-permanent, independent self."),
        Q("Which contrast is a fair broad tendency?", "Western thought stresses individual autonomy, while Eastern thought often stresses interconnectedness", ["The West ignores reason", "The East ignores relationships", "Both are identical"], "This is a general tendency, not an absolute rule.")
      ]
    },
    {
      id: "concepts", name: "Key Concepts Review", sub: "Match the Thinker and Idea", color: "var(--butter)",
      questions: [
        Q("Who is associated with self-examination?", "Socrates", ["Plato", "Aristotle", "Marx"], "Socrates is paired with *self-examination*."),
        Q("Who is associated with the three parts of the soul?", "Plato", ["Socrates", "Descartes", "Nietzsche"], "Plato described reason, spirit, and appetite."),
        Q("Who is associated with eudaimonia?", "Aristotle", ["Plato", "Confucius", "Mead"], "Aristotle is paired with *eudaimonia*."),
        Q("Who is associated with “Cogito, ergo sum”?", "René Descartes", ["Aristotle", "Marx", "Cooley"], "This is the cogito of Descartes."),
        Q("Who is associated with alienation?", "Karl Marx", ["Nietzsche", "Socrates", "Confucius"], "Alienation is a Marxist concept."),
        Q("Who is associated with the Übermensch?", "Friedrich Nietzsche", ["Karl Marx", "Aristotle", "Descartes"], "The Übermensch belongs to Nietzsche."),
        Q("Who is associated with filial piety?", "Confucius", ["Socrates", "Plato", "Mead"], "Filial piety is Confucian."),
        Q("Who is associated with the “I” and the “Me”?", "George Herbert Mead", ["Charles Horton Cooley", "Karl Marx", "Plato"], "Mead distinguished the “I” and the “Me.”"),
        Q("Which tradition is associated with anatta?", "Buddhism", ["Confucianism", "Platonism", "Marxism"], "Anatta is a Buddhist teaching."),
        Q("Who is associated with the Theory of Forms?", "Plato", ["Aristotle", "Socrates", "Descartes"], "The Theory of Forms is Plato's."),
        Q("Who is associated with mind-body dualism?", "René Descartes", ["Karl Marx", "Confucius", "Socrates"], "Dualism is Descartes' idea."),
        Q("Who is associated with class struggle?", "Karl Marx", ["Nietzsche", "Plato", "Cooley"], "Class struggle is Marx's concept."),
        Q("Who is associated with the looking-glass self?", "Charles Horton Cooley", ["George Herbert Mead", "Aristotle", "Confucius"], "Cooley introduced the *looking-glass self*."),
        Q("Who is associated with questioning conventional values?", "Friedrich Nietzsche", ["Confucius", "Aristotle", "Plato"], "Nietzsche asked us to question inherited values."),
        Q("Who is associated with moral cultivation?", "Confucius", ["Descartes", "Marx", "Nietzsche"], "Moral cultivation is a key Confucian concept.")
      ]
    }
  ];

  
  const MAX_PER_TOPIC = 15;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (id) => document.getElementById(id);
  const el = {
    topics: $("topics"), questions: $("questions"),
    screens: { home: $("screen-home"), quiz: $("screen-quiz"), result: $("screen-result") },
    barTitle: $("bar-title"), barCount: $("bar-count"), track: $("track"), fill: $("fill"),
    quit: $("btn-quit"), submit: $("btn-submit"), note: $("submit-note"),
    resTopic: $("result-topic"), ring: $("ring"), ringNum: $("ring-num"), ringSub: $("ring-sub"),
    rank: $("rank"), rankText: $("rank-text"),
    stRight: $("st-right"), stWrong: $("st-wrong"), stBest: $("st-best"),
    retry: $("btn-retry"), home: $("btn-home"),
    segWrong: $("seg-wrong"), segAll: $("seg-all"), reviewTitle: $("review-title"), review: $("review"),
    confetti: $("confetti")
  };

  const wait = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
  const store = {
    get(id) { try { return Number(localStorage.getItem("uts-best-" + id)) || 0; } catch (e) { return 0; } },
    set(id, v) { try { localStorage.setItem("uts-best-" + id, String(v)); } catch (e) { /* ignore */ } }
  };

  let topic = null, qs = [], reviewMode = "wrong", leaveTimer = null;

  async function show(name) {
    const current = Object.values(el.screens).find((s) => !s.hidden);
    if (current) { current.classList.add("leaving"); await wait(240); current.hidden = true; current.classList.remove("leaving"); }
    el.screens[name].hidden = false;
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* Home */
  function renderTopics() {
    el.topics.innerHTML = "";
    TOPICS.forEach((t, i) => {
      const n = Math.min(t.questions.length, MAX_PER_TOPIC);
      const best = store.get(t.id);
      const b = document.createElement("button");
      b.type = "button"; b.className = "topic"; b.setAttribute("role", "listitem");
      b.style.setProperty("--c", t.color); b.style.setProperty("--i", i);
      b.innerHTML = `<span class="topic-name">${esc(t.name)}</span><span class="topic-sub">${esc(t.sub)}</span>` +
        `<span class="topic-meta"><span class="pill">${n} questions</span>${best ? `<span class="pill">Best ${best}/${n}</span>` : ""}</span>`;
      b.addEventListener("click", () => start(t));
      el.topics.appendChild(b);
    });
  }

  /* Quiz: all questions on one page, no feedback until submit */
  async function start(t) {
    topic = t;
    qs = shuffle(t.questions).slice(0, MAX_PER_TOPIC).map((item) => {
      const choices = shuffle([item.correct, ...item.wrong]);
      return { q: item.q, why: item.why, correct: item.correct, choices, answer: choices.indexOf(item.correct), picked: -1 };
    });
    el.barTitle.textContent = t.name;
    el.track.setAttribute("aria-valuemax", String(qs.length));
    renderQuestions();
    updateProgress();
    el.note.textContent = "Answer every question to submit.";
    el.note.classList.remove("warn");
    await show("quiz");
  }

  function renderQuestions() {
    el.questions.innerHTML = "";
    qs.forEach((item, qi) => {
      const card = document.createElement("fieldset");
      card.className = "q"; card.id = "q" + qi; card.style.setProperty("--i", qi);
      card.style.border = ""; card.style.margin = "0"; card.style.minInlineSize = "0";
      const opts = item.choices.map((c, ci) =>
        `<label class="option"><input type="radio" name="q${qi}" value="${ci}"><span class="mark"></span><span class="label">${esc(c)}</span></label>`).join("");
      card.innerHTML = `<legend style="display:none">Question ${qi + 1}</legend>` +
        `<div class="q-head"><span class="q-num">${qi + 1}.</span><p class="q-text">${fmt(item.q)}</p></div><div class="options">${opts}</div>`;
      card.addEventListener("change", (e) => {
        if (e.target && e.target.type === "radio") {
          item.picked = Number(e.target.value);
          card.classList.add("answered"); card.classList.remove("nudge");
          updateProgress();
        }
      });
      el.questions.appendChild(card);
    });
  }

  const answeredCount = () => qs.filter((x) => x.picked >= 0).length;

  function updateProgress() {
    const done = answeredCount(), total = qs.length;
    el.barCount.textContent = `${done} / ${total}`;
    el.fill.style.width = `${(done / total) * 100}%`;
    el.track.setAttribute("aria-valuenow", String(done));
    const ready = done === total;
    el.submit.setAttribute("aria-disabled", ready ? "false" : "true");
    if (ready) { el.note.textContent = "All answered. You can still change any answer before submitting."; el.note.classList.remove("warn"); }
    else if (el.note.classList.contains("warn")) { el.note.textContent = `${total - done} question${total - done === 1 ? "" : "s"} left to answer.`; }
  }

  function submit() {
    const total = qs.length;
    const firstOpen = qs.findIndex((x) => x.picked < 0);
    if (firstOpen !== -1) {
      const left = qs.filter((x) => x.picked < 0).length;
      el.note.textContent = `${left} question${left === 1 ? "" : "s"} left to answer. Question ${firstOpen + 1} is next.`;
      el.note.classList.add("warn");
      const card = $("q" + firstOpen);
      card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      card.classList.remove("nudge"); void card.offsetWidth; card.classList.add("nudge");
      return;
    }
    finish(total);
  }

  /* Results */
  function rankFor(pct) {
    if (pct === 100) return ["Perfect Score!", "Flawless. You are fully ready for this topic."];
    if (pct >= 80) return ["Excellent Work!", "You have a strong grasp of this topic. Review the few mistakes below."];
    if (pct >= 60) return ["Good Progress!", "You are on the right track. Read the explanations below, then try again."];
    if (pct >= 40) return ["Keep Going!", "A little more review will help. Read the pointers again, then retry."];
    return ["Time to Review.", "Do not worry. Study the pointers once more and take the quiz again."];
  }

  async function finish(total) {
    const right = qs.filter((x) => x.picked === x.answer).length;
    const wrong = total - right;
    const pct = Math.round((right / total) * 100);
    const prev = store.get(topic.id);
    const best = Math.max(prev, right);
    if (right > prev) store.set(topic.id, right);
    const [rank, text] = rankFor(pct);

    el.resTopic.textContent = topic.name;
    el.rank.textContent = rank;
    el.rankText.textContent = text;
    el.ringSub.textContent = `${right} / ${total}`;
    el.ringNum.textContent = "0%";
    el.ring.style.setProperty("--p", 0);
    el.stRight.textContent = String(right);
    el.stWrong.textContent = String(wrong);
    el.stBest.textContent = `${best}/${total}`;
    reviewMode = wrong ? "wrong" : "all";
    renderReview();

    await show("result");
    animateRing(pct);
    if (pct >= 80) burstConfetti();
    renderTopics();
  }

  function renderReview() {
    const wrongOnly = reviewMode === "wrong";
    el.segWrong.setAttribute("aria-pressed", String(wrongOnly));
    el.segAll.setAttribute("aria-pressed", String(!wrongOnly));
    const items = qs.map((x, i) => ({ x, i })).filter(({ x }) => !wrongOnly || x.picked !== x.answer);
    el.reviewTitle.textContent = wrongOnly ? `Your Mistakes (${items.length})` : "All Answers";
    el.review.innerHTML = "";
    if (!items.length) {
      const d = document.createElement("div");
      d.className = "empty";
      d.textContent = "No mistakes. Every answer was correct.";
      el.review.appendChild(d);
      return;
    }
    items.forEach(({ x, i }, k) => {
      const ok = x.picked === x.answer;
      const d = document.createElement("article");
      d.className = "r-item" + (ok ? " ok" : ""); d.style.setProperty("--i", k);
      d.innerHTML = `<p class="r-q"><span>${i + 1}.</span>${fmt(x.q)}</p>` +
        (ok ? "" : `<div class="r-line yours"><b>Your answer</b><span>${esc(x.choices[x.picked])}</span></div>`) +
        `<div class="r-line right"><b>${ok ? "Correct" : "Right answer"}</b><span>${esc(x.correct)}</span></div>` +
        `<p class="r-why">${fmt(x.why)}</p>`;
      el.review.appendChild(d);
    });
  }

  function animateRing(target) {
    const dur = reduceMotion ? 1 : 1400, t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const t = Math.min(1, (now - t0) / dur), v = target * ease(t);
      el.ring.style.setProperty("--p", v.toFixed(2));
      el.ringNum.textContent = `${Math.round(v)}%`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* Soft pastel confetti */
  function burstConfetti() {
    if (reduceMotion) return;
    const c = el.confetti, ctx = c.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = innerWidth * dpr; c.height = innerHeight * dpr; ctx.scale(dpr, dpr);
    const colors = ["#ffb8d4", "#b8ecd0", "#b6dcff", "#cfc4ff", "#ffe79a", "#ffcfb0"];
    const parts = Array.from({ length: 100 }, (_, i) => {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 0.95, s = 8 + Math.random() * 9;
      return { x: innerWidth / 2, y: innerHeight * 0.5, vx: Math.cos(a) * s, vy: Math.sin(a) * s, r: 4 + Math.random() * 4, color: colors[i % colors.length], life: 0 };
    });
    (function frame() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      let alive = false;
      for (const p of parts) {
        p.life++; p.vx *= 0.992; p.vy = p.vy * 0.992 + 0.28; p.x += p.vx; p.y += p.vy;
        if (p.life < 160 && p.y < innerHeight + 20) {
          alive = true; ctx.globalAlpha = 1 - p.life / 160; ctx.fillStyle = p.color;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      if (alive) requestAnimationFrame(frame); else ctx.clearRect(0, 0, innerWidth, innerHeight);
    })();
  }

  /* Events */
  el.submit.addEventListener("click", submit);
  el.retry.addEventListener("click", () => start(topic));
  el.home.addEventListener("click", async () => { await show("home"); renderTopics(); });
  el.segWrong.addEventListener("click", () => { reviewMode = "wrong"; renderReview(); });
  el.segAll.addEventListener("click", () => { reviewMode = "all"; renderReview(); });
  /* Leaving mid-quiz needs a second tap, since confirm dialogs are not available */
  el.quit.addEventListener("click", async () => {
    if (answeredCount() > 0 && !leaveTimer) {
      el.quit.textContent = "Leave? Tap again";
      leaveTimer = setTimeout(() => { el.quit.textContent = "← Topics"; leaveTimer = null; }, 3000);
      return;
    }
    clearTimeout(leaveTimer); leaveTimer = null; el.quit.textContent = "← Topics";
    await show("home"); renderTopics();
  });

  renderTopics();

  /* ---------- Background music: plays background.mp3 from the same folder, starting automatically ---------- */
  const bgm = document.getElementById("bgm");
  const musicEl = document.getElementById("music");
  const musicBtn = document.getElementById("music-btn");
  const musicState = document.getElementById("music-state");
  const musicVol = document.getElementById("music-vol");
  const FADE_IN_MS = 2000, FADE_OUT_MS = 400;
  let wantOn = false, missing = false, mutedStart = false, fadeId = 0;

  const musicPref = {
    get() { try { return localStorage.getItem("uts-music"); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem("uts-music", v); } catch (e) { /* ignore */ } }
  };
  const targetVolume = () => Number(musicVol.value) / 100;

  function fadeTo(target, ms, done) {
    cancelAnimationFrame(fadeId);
    const from = bgm.volume, t0 = performance.now();
    const step = (now) => {
      const k = Math.min(1, (now - t0) / ms);
      bgm.volume = Math.max(0, Math.min(1, from + (target - from) * (1 - Math.pow(1 - k, 3))));
      if (k < 1) fadeId = requestAnimationFrame(step); else if (done) done();
    };
    fadeId = requestAnimationFrame(step);
  }

  function paintMusic() {
    const on = wantOn && !missing;
    musicEl.classList.toggle("on", on && !mutedStart);
    musicBtn.setAttribute("aria-pressed", String(on && !mutedStart));
    musicBtn.setAttribute("aria-label", on && !mutedStart ? "Pause background music" : "Play background music");
    musicState.textContent = on ? (mutedStart ? "Tap for sound" : "Playing") : "Off";
  }

  /* Starts with sound when the browser allows it, otherwise starts muted and unmutes on the first tap. */
  async function playMusic() {
    if (missing) return;
    mutedStart = false; bgm.muted = false; bgm.volume = 0;
    try {
      await bgm.play();
      wantOn = true; fadeTo(targetVolume(), FADE_IN_MS);
    } catch (e) {
      bgm.muted = true;
      try { await bgm.play(); wantOn = true; mutedStart = true; }
      catch (e2) { wantOn = false; }
    }
    paintMusic();
  }
  function unmuteMusic() {
    mutedStart = false; bgm.muted = false; bgm.volume = 0;
    fadeTo(targetVolume(), FADE_IN_MS);
    paintMusic();
  }
  function pauseMusic() {
    wantOn = false; mutedStart = false;
    paintMusic();
    fadeTo(0, FADE_OUT_MS, () => bgm.pause());
  }

  bgm.addEventListener("error", () => { missing = true; wantOn = false; paintMusic(); });
  musicBtn.addEventListener("click", () => {
    if (wantOn && mutedStart) { musicPref.set("on"); unmuteMusic(); }
    else if (wantOn) { musicPref.set("off"); pauseMusic(); }
    else { musicPref.set("on"); playMusic(); }
  });
  musicVol.addEventListener("input", () => {
    if (wantOn && !mutedStart) { cancelAnimationFrame(fadeId); bgm.volume = targetVolume(); }
  });
  document.addEventListener("visibilitychange", () => {
    if (!wantOn) return;
    if (document.hidden) bgm.pause(); else bgm.play().catch(() => {});
  });

  /* Autoplay: try as soon as the page loads, then retry on the first tap, key press, or touch. */
  const gestures = ["pointerdown", "touchstart", "keydown", "click"];
  const onGesture = (e) => {
    if (musicEl.contains(e.target) || musicPref.get() === "off" || missing) return;
    if (wantOn && mutedStart) { unmuteMusic(); }
    else if (!wantOn) { playMusic(); }
    if (wantOn && !mutedStart) gestures.forEach((g) => document.removeEventListener(g, onGesture, true));
  };
  gestures.forEach((g) => document.addEventListener(g, onGesture, true));
  if (musicPref.get() !== "off") playMusic(); else paintMusic();
})();
