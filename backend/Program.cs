var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Simple API endpoint
app.MapGet("/api/hello", () =>
{
    return "Hello from .NET API shiv 🎯";
});

app.Run();

