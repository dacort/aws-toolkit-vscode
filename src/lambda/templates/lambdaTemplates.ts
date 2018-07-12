export class LambdaTemplates {
    static readonly InvokeTemplate = `
    <h1> 
        Include input payload with <%= FunctionName %>
    </h1>
    <div id="app">
        <h3>
            Use an input template:
        </h3>
        <select v-model="selectedSampleRequest" v-on:change="newSelection">
            <option disabled value="">Select a sample</option>
            <% InputSamples.forEach(function(el) { %>
                <option value="<%= el.filename %>"><%= el.name %></option>
            <% }); %>
        </select>
        <br />
        <textarea 
            rows="20"
            cols="90"
            v-model="sampleText"
        ></textarea>
        <br />
        <input type="submit" v-on:click="sendInput" value="Invoke lambda">
        <br />
        <h3 v-if="isLoading">Loading response...</h3>
        <div v-if="showResponse">
            <h1>
            Invoking <%= FunctionName %>...
            </h1>
            <div v-if="error">
            <p>Something went wrong.</p>
            <pre>{{ error }}</pre>
            </div>
            <div v-else>
                <p>Status Code: {{statusCode}}</p>
                <p>Response: 
                    <pre>{{ payload }}</pre>
                </p>
                <p>Logs: 
                    <pre>{{ logs }}</pre>
                </p>
            </div>
        </div>
    </div>
    <% Libraries.forEach(function(lib) { %>
        <script nonce="<%= lib.Nonce %>" src="<%= lib.Uri %>"></script>
    <% }); %>
    <% Scripts.forEach(function(scr) { %>
        <script nonce="<%= scr.Nonce %>" src="<%= scr.Uri %>"></script>
    <% }); %>
    `;
    static readonly GetPolicyTemplate = `
    <h1>
        Policy for <%= FunctionName %>...
    </h1>
    <p>Policy: 
        <pre><%- JSON.stringify(JSON.parse(Policy), null, 4) %></pre>
    </p>
    `;
    static readonly GetConfigTemplate = `
    <h1>
        Configuration for <%= FunctionName %>...
    </h1>
    <p>Function Name: <%= FunctionName %></p>
    <p>Function Arn: <%= FunctionArn %>
    <p>Description: <%= Description %>
    <p>Handler: <%= Handler %>
    <p>Last Modified: <%= LastModified %>
    <p>Memory Size: <%= MemorySize %>
    <p>Role: <%= Role %>
    <p>Timeout: <%= Timeout %>
    <p>Version: <%= Version %>
    `;
}