var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import OpenAI from "openai";
const chatResponseController = async (req, res) => {
    var _a, e_1, _b, _c;
    var _d;
    try {
        const { chatHistory } = req.body;
        const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const formattedChatHistory = formatChatHistory(chatHistory);
        const stream = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                ...formattedChatHistory,
            ],
            stream: true,
            max_tokens: 100,
        });
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");
        try {
            for (var _e = true, stream_1 = __asyncValues(stream), stream_1_1; stream_1_1 = await stream_1.next(), _a = stream_1_1.done, !_a; _e = true) {
                _c = stream_1_1.value;
                _e = false;
                const chunk = _c;
                if ((_d = chunk.choices[0].delta) === null || _d === void 0 ? void 0 : _d.content) {
                    res.write(chunk.choices[0].delta.content);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_e && !_a && (_b = stream_1.return)) await _b.call(stream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        res.end();
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
};
function formatChatHistory(chatHistory) {
    return chatHistory.map(({ type, text }) => ({
        role: type === "user" ? "user" : "assistant",
        content: text,
    }));
}
export default chatResponseController;
