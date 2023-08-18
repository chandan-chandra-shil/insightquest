import { useState } from 'react';

const CreateNewSurvey = () => {
    const [surveyTitle, setSurveyTitle] = useState('');
    const [questions, setQuestions] = useState([
        {
            question: '',
            answers: ['']
        }
    ]);

    const addQuestion = () => {
        setQuestions([...questions, { question: '', answers: [''] }]);
    };

    const updateQuestion = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const addAnswer = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].answers.push('');
        setQuestions(updatedQuestions);
    };

    const removeAnswer = (questionIndex, answerIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
        setQuestions(updatedQuestions);
    };

    const removeQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Create New Survey</h2>
            <div className="mb-4">
                <label htmlFor="surveyTitle" className="block text-sm font-medium text-gray-700">
                    Survey Title
                </label>
                <input
                    type="text"
                    id="surveyTitle"
                    className="mt-1 p-2 border rounded-md w-full"
                    value={surveyTitle}
                    onChange={(e) => setSurveyTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Survey Questions</label>
                {questions.map((questionObj, questionIndex) => (
                    <div key={questionIndex} className="mb-4">
                        <input
                            type="text"
                            className="mb-2 p-2 border rounded-md w-full"
                            placeholder="Enter your question"
                            value={questionObj.question}
                            onChange={(e) => updateQuestion(questionIndex, 'question', e.target.value)}
                        />
                        {questionObj.answers.map((answer, answerIndex) => (
                            <div key={answerIndex} className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    className="flex-grow p-2 border rounded-md"
                                    placeholder={`Answer ${answerIndex + 1}`}
                                    value={answer}
                                    onChange={(e) =>
                                        updateQuestion(questionIndex, 'answers', [
                                            ...questionObj.answers.slice(0, answerIndex),
                                            e.target.value,
                                            ...questionObj.answers.slice(answerIndex + 1)
                                        ])
                                    }
                                />
                                <button
                                    className="p-2 bg-red-500 text-white rounded-md"
                                    onClick={() => removeAnswer(questionIndex, answerIndex)}
                                >
                                    Remove Answer
                                </button>
                            </div>
                        ))}
                        <button
                            className="mt-2 p-2 bg-blue-500 text-white rounded-md"
                            onClick={() => addAnswer(questionIndex)}
                        >
                            Add Answer
                        </button>
                        <button
                            className="mt-2 p-2 bg-red-500 text-white rounded-md"
                            onClick={() => removeQuestion(questionIndex)}
                        >
                            Remove Question
                        </button>
                    </div>
                ))}
                <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded-md"
                    onClick={addQuestion}
                >
                    Add Question
                </button>
            </div>
            <button
                className="p-2 bg-green-500 text-white rounded-md"
                onClick={() => {
                    // Here you would handle the submission of the survey data
                    console.log('Survey Data:', { surveyTitle, questions });
                }}
            >
                Create Survey
            </button>
        </div>
    );
};

export default CreateNewSurvey;
